import { ComponentProps } from 'react'
import { Input as UIInput } from '../../../base/ui/input'
import { cn } from '../../../util/cn'

export type InputProps = ComponentProps<typeof UIInput>

export const Input = ({ className, ...props }: InputProps) => {
  return <UIInput {...props} className={cn(className, 'bg-gray-100/35')} />
}
