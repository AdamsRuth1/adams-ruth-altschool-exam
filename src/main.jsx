import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./main.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
)
