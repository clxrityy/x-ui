import { ComponentProps } from 'react'
import { cn } from '../../../util/cn'

export interface SkeletonProps extends ComponentProps<'div'> {
  width?: number
  height?: number
  borderRadius?: number
}

export const Skeleton = ({ width = 250, height = 100, className, borderRadius, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('animate-pulse bg-gray-200/85 rounded-md', className)}
      style={{
        width,
        height,
        borderRadius,
      }}
      {...props}
    />
  )
}
