import '../../../styles/base/loader.css'
import { ComponentProps } from 'react'
import { cn } from '../../../../util/cn'

export interface LoaderProps extends ComponentProps<'div'> {
  size?: number
}

export const Loader = ({ size = 24, ...props }: LoaderProps) => {
  return (
    <div
      {...props}
      className={cn('loader', props.className)}
      style={{
        width: size,
        height: size,
      }}
    />
  )
}
