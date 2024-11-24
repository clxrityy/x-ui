import { ComponentProps, useState } from 'react'
import { cn } from '../../../../util/cn'
import { ICONS } from '../../../../config'
import { IconType } from 'react-icons'

export interface SpoilerProps extends ComponentProps<'div'> {
  previewText?: string
  children: React.ReactNode
  size?: number
  Icons?: {
    open?: string | IconType
    close?: string | IconType
  }
}

export const Spoiler = ({ previewText, children, size = 20, Icons, ...props }: SpoilerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={cn(props.className, 'flex flex-col gap-5')} {...props}>
      <button className="flex flex-row gap-2 items-center justify-center cursor-pointer" onClick={handleClick}>
        <p>{previewText}</p>
        <span>
          {/* {isOpen ? Icons && <Icons.close size={size} /> : Icons!.open && <Icons.open size={size} />} */}
          {isOpen ? (
            Icons?.close ? (
              typeof Icons.close === 'string' ? (
                <span>{Icons.close}</span>
              ) : (
                <Icons.close size={size} />
              )
            ) : (
              <ICONS.ARROW_UP size={size} />
            )
          ) : Icons?.open ? (
            typeof Icons.open === 'string' ? (
              <span>{Icons.open}</span>
            ) : (
              <Icons.open size={size} />
            )
          ) : (
            <ICONS.ARROW_DOWN size={size} />
          )}
        </span>
      </button>
      {isOpen && children}
    </div>
  )
}
