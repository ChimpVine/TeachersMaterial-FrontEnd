import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import SmartlookClient from 'smartlook-client';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const API_BASE_URL = 'https://site.chimpvine.com/test161803';
    const [user, setUser] = useState(null);

    const login = useCallback((token) => {
        try {
            const decodedToken = jwtDecode(token);
            const { user_email, url ,display_name} = decodedToken;
            setUser(decodedToken); 
            Cookies.set('authToken', token, { path: '/', secure: true, sameSite: 'Strict' });
            Cookies.set('site_url', url, { path: '/', secure: true, sameSite: 'Strict' });
            Cookies.set('user_email', user_email, { path: '/', secure: true, sameSite: 'Strict' });
            Cookies.set('Display_name', display_name, { path: '/', secure: true, sameSite: 'Strict' }); 
              // Identify user in Smartlook
              SmartlookClient?.identify(user_email, {
                displayName: display_name || 'Anonymous',
                email: user_email,
            });
        } catch (error) {
            console.error("Invalid token during login:", error);
        }
    }, []);

    const logout = useCallback(async () => {
        const token = Cookies.get('authToken');
        try {
            await axios.post(`${API_BASE_URL}/wp-json/custom/v1/logout`, { token });
        } catch (error) {
            console.error("Error logging out of WordPress:", error);
        }
        Cookies.remove('authToken', { path: '/' });
        Cookies.remove('site_url', { path: '/' });
        Cookies.remove('user_email', { path: '/' });
        Cookies.remove('Display_name', { path: '/'}); 
        setUser(null);
         // Clear Smartlook user identification
         SmartlookClient?.anonymize();
    }, []);

    const verifyToken = useCallback(() => {
        const token = Cookies.get('authToken');
      
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 > Date.now()) {
                    setUser(decodedToken); // Include Display_name
                    return true; // Token is valid

                    /* Verify Token API*/
                } else {
                    logout(); // Logout if token expired
                    return false;
                }
            } catch (error) {
                console.error("Invalid token during verification:", error);
                logout(); // Logout if token is invalid
                return false;
            }
        }
        return false; // No token found
    }, [logout]);

    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    

    return (
        <UserContext.Provider value={{ user, login, logout, verifyToken }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
