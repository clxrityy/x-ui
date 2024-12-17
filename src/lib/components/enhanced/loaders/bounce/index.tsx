import { ComponentProps } from 'react'
import '../../../../styles/enhanced/loaders/bounce.css'
import { cn } from '../../../../../util/cn'

interface BounceLoaderProps extends ComponentProps<'div'> {}

function BounceLoader({ ...props }: BounceLoaderProps) {
  return <div {...props} className={cn('bounce-loader', props.className)} />
}

export { BounceLoader, type BounceLoaderProps }
