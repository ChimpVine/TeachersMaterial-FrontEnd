import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import RoutingConfig from "./routing/RoutingConfig"
import { BrowserRouter as Router } from 'react-router-dom';
import "./assests/css/style.css";
import UserProvider from './context/UserContext';
import SmartlookClient from 'smartlook-client';

SmartlookClient.init('8c4b260da4d6c06d02e08e7e3ed233dc4b46d89b');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <UserProvider>
      <RoutingConfig />
    </UserProvider>
    </Router>
  </React.StrictMode>,
)

