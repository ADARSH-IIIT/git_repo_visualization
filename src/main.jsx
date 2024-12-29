import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import './index.css';
import MainRouter from './MainRouter.jsx'; // Import MainRouter which holds the routes

// import AlertTemplate from 'react-alert-template-basic'
// CustomAlertTemplate

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import CustomAlertTemplate from './custom_alert_template.jsx';


const options = {
  timeout: 4000, 
  transition: transitions.SCALE
}


createRoot(document.getElementById('root')).render(

    <Router>

  <AlertProvider template={CustomAlertTemplate} {...options}>
      <MainRouter /> {/* Wrap your routes here */}
      </AlertProvider>

    </Router >
 
);
