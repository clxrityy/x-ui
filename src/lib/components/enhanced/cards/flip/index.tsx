// https://uiverse.io/vamsidevendrakumar/soft-shrimp-94

import { ComponentProps } from 'react'
import { cn } from '../../../../../util/cn'
import '../../../../styles/enhanced/cards/flip.css'

interface FlipCardProps extends ComponentProps<'div'> {
  front: React.ReactNode
  back: React.ReactNode
}

function FlipCard({ front, back, ...props }: FlipCardProps) {
  return (
    /* From Uiverse.io by vamsidevendrakumar */
    <div className={cn('flip-card', props.className)} {...props}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  )
}

export { FlipCard, type FlipCardProps }
