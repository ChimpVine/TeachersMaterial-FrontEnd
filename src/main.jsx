import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import RoutingConfig from "./routing/RoutingConfig"
import { BrowserRouter as Router } from 'react-router-dom';
import "./assests/css/style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <RoutingConfig />
    </Router>
  </React.StrictMode>,
)

