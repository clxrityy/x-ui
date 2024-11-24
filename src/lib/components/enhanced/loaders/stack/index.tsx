import { ComponentProps } from 'react'
import '../../../../styles/enhanced/loaders/stack.css'
import { cn } from '../../../../../util/cn'

interface StackLoaderProps extends ComponentProps<'div'> {}

function StackLoader({ ...props }: StackLoaderProps) {
  return (
    /* From Uiverse.io by csozidev */
    <div {...props} className={cn('stack-loader', props.className)}>
      <div className="stack-loader-box stack-loader-box-1">
        <div className="stack-loader-side-left"></div>
        <div className="stack-loader-side-right"></div>
        <div className="stack-loader-side-top"></div>
      </div>
      <div className="stack-loader-box stack-loader-box-2">
        <div className="stack-loader-side-left"></div>
        <div className="stack-loader-side-right"></div>
        <div className="stack-loader-side-top"></div>
      </div>
      <div className="stack-loader-box stack-loader-box-3">
        <div className="stack-loader-side-left"></div>
        <div className="stack-loader-side-right"></div>
        <div className="stack-loader-side-top"></div>
      </div>
      <div className="stack-loader-box stack-loader-box-4">
        <div className="stack-loader-side-left"></div>
        <div className="stack-loader-side-right"></div>
        <div className="stack-loader-side-top"></div>
      </div>
    </div>
  )
}

export { StackLoader, type StackLoaderProps }
