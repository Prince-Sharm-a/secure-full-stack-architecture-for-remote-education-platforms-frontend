import { ChildrenType } from "@/lib/type";
import { createContext,useContext } from "react"

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children,  } : ChildrenType) => {
    return (
        // <AuthProvider.Provider value >
        //     {children}
        // </AuthProvider.Provider>
    )
}

export const useAuth = useContext(AuthContext);
