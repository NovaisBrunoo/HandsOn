import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef,  } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({name, ...rest}, ref)=>{
    return (
        <input 
            {...rest}  
            name={name} 
            ref={ref}
            className="border-[#555555] border-[1px] rounded p-1"
        />
    )
})

Input.displayName = 'Input'