import { createContext, useState , useEffect } from "react";

export const authContext = createContext(false);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [isAuth , setIsAuth] = useState(false);

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem("token"));
        if (getUser) {
            setUser(getUser);
            // setIsAuth(true);
        }
    }, []);
    return (
        <authContext.Provider value={{ user, setUser}}>
            {children}
        </authContext.Provider>
    )
}
