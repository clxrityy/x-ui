import { ComponentProps } from 'react'
import { Separator as UISeparator } from '../../../../base/ui/separator'
import { cn } from '../../../../util/cn'

interface SeparatorProps extends ComponentProps<typeof UISeparator> {}

const Separator = ({ ...props }: SeparatorProps) => {
  return <UISeparator {...props} className={cn(props.className)} />
}

export { Separator, type SeparatorProps }
