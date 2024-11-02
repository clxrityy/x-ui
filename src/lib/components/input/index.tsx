import { ComponentProps } from 'react'
import { Input as UIInput } from '../../../base/ui/input'
import { cn } from '../../../util/cn'

export interface InputProps extends ComponentProps<typeof UIInput> {
  className?: string
}

export const Input = ({ className, ...props }: InputProps) => {
  return <UIInput {...props} className={cn(className)} />
}
