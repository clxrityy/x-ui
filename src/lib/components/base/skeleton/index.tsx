import { ComponentProps } from 'react'
import { cn } from '../../../../util/cn'

export interface SkeletonProps extends ComponentProps<'div'> {
  width?: number
  height?: number
  borderRadius?: number
}

export const Skeleton = ({ width = 250, height = 100, borderRadius, ...props }: SkeletonProps) => {
  return (
    <div
      {...props}
      className={cn('animate-pulse bg-gray-200/85 rounded-md', props.className)}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  )
}
