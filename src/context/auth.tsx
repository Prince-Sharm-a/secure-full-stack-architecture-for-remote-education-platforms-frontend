import { ChildrenType } from "@/lib/type";
import { createContext,useContext, useState } from "react"

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children } : ChildrenType) => {
    const [openLogin, setOpenLogin] = useState(false);
    
    return (
        <AuthContext.Provider value={{ openLogin, setOpenLogin }} >
             {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
