import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [chats, setChats] = useState([]);
    const [notification, setNotification] = useState([]);

    // Use a ref or simple check to avoid navigation loop if outside Router
    // But wait, ChatProvider wraps App, and App has Router?
    // Actually, usually Router wraps App, and Provider is inside or outside?
    // Here in main.jsx: Provider wraps App. App usually contains Router. 
    // If useHistory/useNavigate is used here, it must be inside Router.
    // So I should move Router to main.jsx or wrap Provider inside Router in App.
    // Let's modify main.jsx later to include Router or just handle logic in App.
    // For now, I will just store state here. navigation logic should be in components or App.

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
        // If we need to redirect, we should do it in a component that is inside Router
    }, []);

    return (
        <ChatContext.Provider
            value={{
                user,
                setUser,
                selectedChat,
                setSelectedChat,
                chats,
                setChats,
                notification,
                setNotification,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChatState = () => {
    return useContext(ChatContext);
};
