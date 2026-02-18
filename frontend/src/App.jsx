import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useChatState } from './context/ChatProvider';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import { useState, useEffect } from 'react';
import NotesDisguise from './components/NotesDisguise';

const ProtectedRoute = ({ children, user }) => {
    if (!user && !localStorage.getItem("userInfo")) {
        return <Navigate to="/" replace />;
    }
    return children;
};

function App() {
    const { user } = useChatState();
    // Initialize unlocked state from sessionStorage so it persists on reload only during the session
    // Or default to false to force re-entry every time for security/stealth
    const [isUnlocked, setIsUnlocked] = useState(false);

    // Optional: If you want it to persist during a session (browser refresh), uncomment below
    /*
    useEffect(() => {
        const unlocked = sessionStorage.getItem('app_unlocked');
        if (unlocked === 'true') {
            setIsUnlocked(true);
        }
    }, []);
    */

    const handleUnlock = () => {
        setIsUnlocked(true);
        // sessionStorage.setItem('app_unlocked', 'true');
    };

    if (!isUnlocked) {
        return <NotesDisguise onUnlock={handleUnlock} />;
    }

    return (
        <Router>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute user={user}>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
