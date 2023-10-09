import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    }

    // Logout and go to main page
    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}