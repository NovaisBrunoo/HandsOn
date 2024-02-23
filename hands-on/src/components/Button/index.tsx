import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="bg-[#7978D9] rounded py-3 w-full font-bold text-sm text-white"
        >
            {children}
        </button>
    );
};