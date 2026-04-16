"use client"
import { cn } from "@/lib/utils";

type ModalProps = React.ComponentProps<"div"> & {
    setOpen?: (open:boolean) => void;
}

export default function Modal({children, className, setOpen, ...props} : ModalProps){
    
    return(
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10" onClick={()=>setOpen?.(false)} >
          
          <div 
          className={cn(" dark:bg-black bg-white w-87.5 p-8 rounded-xl shadow-lg relative",className)} 
          {...props}
          onClick={(e)=>e.stopPropagation()}
          >
            {children}
          </div>
        </div>
    )
}