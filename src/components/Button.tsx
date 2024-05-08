import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children:ReactNode,
    className:string,
    width?:"w-full"|"w-fit"
}
const Button = ({children,className,width, ...rest}:IProps) => {
    return (
        <button  className={`${className} ${width} border py-2 rounded-lg`} {...rest}>{children}</button>
    )
}

export default Button
