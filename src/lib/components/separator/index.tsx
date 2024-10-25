import { ComponentProps } from "react";

export enum SEPARATOR_VARIANT {
    DEFAULT = 'DEFAULT',
    DASHED = 'DASHED',
    DOTTED = 'DOTTED',
    DOUBLE = 'DOUBLE',
    GROOVE = 'GROOVE',
    INSET = 'INSET',
    OUTSET = 'OUTSET',
    RIDGE = 'RIDGE',
    SOLID = 'SOLID',
}

export type SeparatorVariant = keyof typeof SEPARATOR_VARIANT;

export const variantClasses: Record<SeparatorVariant, string> = {
    DEFAULT: "border-t border-gray-300",
    DASHED: "border-t border-dashed border-gray-300",
    DOTTED: "border-t border-dotted border-gray-300",
    DOUBLE: "border-t border-double border-gray-300",
    GROOVE: "border-t border-groove border-gray-300",
    INSET: "border-t border-inset border-gray-300",
    OUTSET: "border-t border-outset border-gray-300",
    RIDGE: "border-t border-ridge border-gray-300",
    SOLID: "border-t border-solid border-gray-300",
}

export interface SeparatorProps extends ComponentProps<'hr'> {
    variant?: SeparatorVariant;
}

export const Separator = ({ variant = SEPARATOR_VARIANT.DEFAULT, ...props }: SeparatorProps): JSX.Element => {
    return (
        <hr
            className={`${variantClasses[variant]} ${props.className} my-4`}
            {...props}
        />
    )
}