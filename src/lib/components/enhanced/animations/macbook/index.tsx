import '../../../../styles/enhanced/animations/macbook.css'
import { ComponentProps } from 'react'
import { cn } from '../../../../../util/cn'

interface MacBookAnimationProps extends ComponentProps<'div'> {}

function MacbookAnimation({ ...props }: MacBookAnimationProps) {
  return (
    /* From Uiverse.io by Ashon-G */
    <div {...props} className={cn('macbook', props.className)}>
      <div className="inner">
        <div className="screen">
          <div className="face-one">
            <div className="camera"></div>
            <div className="display">
              <div className="shade"></div>
            </div>
            <span>MacBook Air</span>
          </div>
          <title>Layer 1</title>
        </div>
        <div className="macbody">
          <div className="face-one">
            <div className="touchpad"></div>
            <div className="keyboard">
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key space"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
              <div className="key f"></div>
            </div>
          </div>
          <div className="pad one"></div>
          <div className="pad two"></div>
          <div className="pad three"></div>
          <div className="pad four"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export { MacbookAnimation, type MacBookAnimationProps }
