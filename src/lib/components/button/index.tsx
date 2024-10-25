import { ComponentProps } from 'react'

export enum BUTTON_VARIANT {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  DANGER = 'DANGER',
}

export type ButtonVariant = keyof typeof BUTTON_VARIANT

export const variantClasses: Record<ButtonVariant, string> = {
  PRIMARY: 'bg-blue-600 text-white',
  SECONDARY: 'bg-gray-500 text-white',
  TERTIARY: 'bg-white text-black border border-black/75 hover:border-black/100',
  DANGER: 'bg-red-600 text-white',
}

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
  children: React.ReactNode
}

export const Button = ({ variant = BUTTON_VARIANT.PRIMARY, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`font-semibold px-6 py-3 rounded-md focus:outline-none ${variantClasses[variant]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} focus:ring focus:ring-offset-1 transition-all duration-100 ease-out hover:scale-95 ring-blue-600/65 ${props.className}`}
      {...props}
    >
      {children}
    </button>
  )
}
