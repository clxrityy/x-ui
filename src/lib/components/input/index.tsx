import { ComponentProps } from "react";

export enum INPUT_VARIANT {
    DEFAULT = 'DEFAULT',
    UNDERLINE = 'UNDERLINE',
    OUTLINE = 'OUTLINE',
    SHADOW_INNER = 'SHADOW_INNER',
    SHADOW = 'SHADOW',
}

export type InputVariant = keyof typeof INPUT_VARIANT;

export const variantClasses: Record<InputVariant, string> = {
    DEFAULT: "bg-white text-gray-900 border border-gray-700/45 focus:border-blue-600 focus:ring focus:ring-blue-600/50 focus:ring-offset-1 focus:ring-offset-blue-600/25 focus:ring-offset-white",
    UNDERLINE: "bg-transparent text-gray-900 border-b border-gray-500 rounded focus:ring-0 focus:ring-offset-0 outline-none",
    OUTLINE: "bg-transparent text-gray-900 border border-2 border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-600/50 focus:ring-offset-1 focus:ring-offset-blue-600/25 focus:ring-offset-white",
    SHADOW_INNER: "bg-white text-gray-900 border-transparent focus:border-blue-600 focus:ring focus:ring-blue-600/50 focus:ring-offset-1 focus:ring-offset-blue-600/25 focus:ring-offset-white shadow-inner focus:shadow-gray-400",
    SHADOW: "bg-white text-gray-900 border border-transparent focus:border-blue-600 focus:ring focus:ring-blue-600/50 focus:ring-offset-1 focus:ring-offset-blue-600/25 focus:ring-offset-white shadow-lg focus:shadow-2xl",
}

export interface InputProps extends ComponentProps<'input'> {
    variant?: InputVariant;
}

export const Input = ({ variant = INPUT_VARIANT.DEFAULT, ...props }: InputProps): JSX.Element => {
    return (
        <input
            className={`bg-gray-100 font-light px-4 py-2 rounded-md focus:outline-none ${variantClasses[variant]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} focus:ring-offset-1 transition-all duration-150 ease-out focus:scale-105 placeholder:text-gray-500 ${props.className}`}
            {...props}
        />
    )
}