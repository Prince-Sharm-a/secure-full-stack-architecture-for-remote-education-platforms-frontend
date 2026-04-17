"use client"
import { ChildrenType } from "@/lib/type";
import { createContext,useContext, useState } from "react"

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children } : ChildrenType) => {
    const [openLogin, setLoginOpen] = useState(false);
    const [openRegister, setRegisterOpen] = useState(false)
    
    return (
        <AuthContext.Provider value={{ openLogin, setLoginOpen, openRegister, setRegisterOpen }} >
             {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
