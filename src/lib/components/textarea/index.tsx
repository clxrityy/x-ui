import { ComponentProps } from 'react'
import { Textarea as TextareaUI } from '../../../base/ui/textarea'
import { cn } from '../../../util/cn'

interface TextareaProps extends ComponentProps<typeof TextareaUI> {
  className?: string
}

const Textarea = ({ className, ...props }: TextareaProps) => {
  return <TextareaUI {...props} className={cn(className, 'placeholder:text-gray-500')} />
}

export { Textarea, type TextareaProps }
