import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'App';
import Layout from 'Layout';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>    
      <Layout>
          <App />       
        </Layout> 
    </Router>
  </React.StrictMode>,
);
