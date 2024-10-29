import { ComponentProps } from 'react'
import { Separator as UISeparator } from '../../../base/ui/separator'

interface SeparatorProps extends ComponentProps<typeof UISeparator> {}

const Separator = ({ ...props }: SeparatorProps) => {
  return <UISeparator {...props} />
}

export { Separator, type SeparatorProps }
