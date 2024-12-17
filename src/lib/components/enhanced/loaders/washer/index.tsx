import { ComponentProps } from 'react'
import '../../../../styles/enhanced/loaders/washer.css'
import { cn } from '../../../../../util/cn'

interface WasherLoaderProps extends ComponentProps<'div'> {}

function WasherLoader({ ...props }: WasherLoaderProps) {
  return <div {...props} className={cn('washer-loader', props.className)} />
}

export { WasherLoader, type WasherLoaderProps }
