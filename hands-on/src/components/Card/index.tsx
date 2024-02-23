import { ReactNode } from "react"

type CardProps = {
    children: ReactNode
}

export const Card = ({children}: CardProps) =>{
    return(
        <div
            className="bg-white px-8 py-11 flex flex-col w-[32.06rem]"
        >
            {children}
        </div>
    )
}