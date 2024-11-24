import { ComponentProps } from 'react'
import { Input as UIInput } from '../../../../base/ui/input'
import { cn } from '../../../../util/cn'

export interface InputProps extends ComponentProps<typeof UIInput> {}

export const Input = ({ ...props }: InputProps) => {
  return <UIInput {...props} className={cn(props.className)} />
}
