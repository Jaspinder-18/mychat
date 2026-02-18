import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChatProvider } from './context/ChatProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChatProvider>
            <App />
            <ToastContainer position="bottom-right" theme="colored" />
        </ChatProvider>
    </React.StrictMode>,
)
