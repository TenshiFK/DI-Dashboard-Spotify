import { useState, createContext, useEffect } from 'react';


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadUserToken() {
            const hash = window.location.hash;
            let userToken = window.localStorage.getItem("token");
            if (!userToken && hash) {
                userToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
                window.location.hash = "";
                window.localStorage.setItem("token", userToken);
                setLoading(false);
            }
            setToken(userToken);
            setLoading(false);
        }
    
        loadUserToken();
    }, []);

    const logout = () => {
        window.localStorage.removeItem("token");
        setToken(null);
    }

    return (
        <AuthContext.Provider 
          value={{
            signed: !! token,
            token,
            logout,
            loading,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}