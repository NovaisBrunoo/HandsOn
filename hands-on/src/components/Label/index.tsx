import { ReactNode } from "react"

type LabelProps = {
    labelHtmlFor: string,
    children: ReactNode,
    type: string
}

export const Label = ({labelHtmlFor, children, type}: LabelProps) =>{
    return (
        <label 
            htmlFor={labelHtmlFor}
            className={`text-[#484848] ${type === 'sm' ? 'font-normal' : 'font-medium'} ${type == 'sm' ? 'text-lg': 'text-2xl'}`}
        >
            {children}
        </label>
    )
}