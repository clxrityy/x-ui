import { ComponentProps } from 'react'

export enum CARD_VARIANT {
  DEFAULT = 'DEFAULT',
  CENTERED = 'CENTERED',
  INVERTED = 'INVERTED',
  SHADOW = 'SHADOW',
}

export type CardVariant = keyof typeof CARD_VARIANT

export const variantClasses: Record<CardVariant, string> = {
  DEFAULT: 'bg-white text-gray-900 border border-gray-300 shadow-sm rounded-md',
  CENTERED:
    'bg-white text-gray-900 border border-gray-300 shadow-sm rounded-md mx-auto flex flex-col items-center justify-center text-center',
  INVERTED: 'invert bg-white text-gray-900 border border-gray-500 shadow-sm rounded-md',
  SHADOW: 'bg-white text-gray-900 border border-gray-300 shadow-xl rounded-md shadow-gray-100',
}

export interface CardProps extends ComponentProps<'div'> {
  variant?: CardVariant
  title?: string
}

export const Card = ({ variant = CARD_VARIANT.DEFAULT, title, children, ...props }: CardProps): JSX.Element => {
  return (
    <div
      className={`p-4 ${variantClasses[variant]} ${props.className} gap-5 mx-10 max-w-fit ${props.className}`}
      {...props}
    >
      {title && <h1 className="text-xl font-bold mb-4 border-b border-gray-400/50 py-1">{title}</h1>}
      {children}
    </div>
  )
}
