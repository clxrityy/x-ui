import { ComponentProps } from 'react'
import '../../../../styles/enhanced/loaders/bounce.css'
import { cn } from '../../../../../util/cn'

interface BounceLoaderProps extends ComponentProps<'div'> {}

function BounceLoader({ ...props }: BounceLoaderProps) {
  return <div className={cn('bounce-loader', props.className)} {...props} />
}

export { BounceLoader, type BounceLoaderProps }
