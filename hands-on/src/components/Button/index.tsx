import { ReactNode } from "react"

type ButtonProps ={
    children: ReactNode
}

export const Button = ({children}: ButtonProps) =>{
    return(
        <button className="bg-[#7978D9] rounded py-3 w-full font-bold text-sm  text-white">
               {children}
        </button>
    )
}