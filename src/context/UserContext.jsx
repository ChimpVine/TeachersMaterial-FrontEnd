import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const API_BASE_URL = 'https://site.chimpvine.com/test161803';
    const [user, setUser] = useState(null);

    const login = useCallback((token , Display_name) => {
        try {
            const decodedToken = jwtDecode(token);
            const { user_email, url } = decodedToken;
            setUser({ ...decodedToken, Display_name }); 
            Cookies.set('authToken', token, { path: '/', secure: true, sameSite: 'Strict' });
            Cookies.set('site_url', url, { path: '/', secure: true, sameSite: 'Strict' });
            Cookies.set('user_email', user_email, { path: '/', secure: true, sameSite: 'Strict' });
            Cookies.set('Display_name', Display_name, { path: '/', secure: true, sameSite: 'Strict' }); 
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
    }, []);

    const verifyToken = useCallback(() => {
        const token = Cookies.get('authToken');
        const Display_name = Cookies.get('Display_name');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 > Date.now()) {
                    setUser({ ...decodedToken, Display_name }); // Include Display_name
                    return true; // Token is valid
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
