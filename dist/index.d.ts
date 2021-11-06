import { InputHTMLAttributes } from "react";
interface IPProps {
    onChange?: (v: string) => void;
    value?: string;
    passwordSymbol?: string;
}
export declare type InputPasswordProps = IPProps & Omit<InputHTMLAttributes<HTMLElement>, "onChange" | "value">;
declare const InputPassword: ({ onChange, value, passwordSymbol, ...props }: InputPasswordProps) => JSX.Element;
export default InputPassword;
