"use client"
import { ChildrenType } from "@/lib/type";
import { createContext,useContext, useEffect, useState } from "react"

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children } : ChildrenType) => {
    const [openLogin, setLoginOpen] = useState(false);
    const [openRegister, setRegisterOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{
        setIsLogin(localStorage.getItem("token") ? true : false)
    },[])
    
    return (
        <AuthContext.Provider value={{ openLogin, setLoginOpen, openRegister, setRegisterOpen, isLogin, setIsLogin }} >
             {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
