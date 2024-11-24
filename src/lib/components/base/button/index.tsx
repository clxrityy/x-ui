import { buttonVariants, Button as UIButton } from '../../../../base/ui/button'
import { VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { cn } from '../../../../util/cn'

interface ButtonProps extends ComponentProps<typeof UIButton>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <UIButton {...props} className={cn(props.className)}>
      {children}
    </UIButton>
  )
}

export { Button, buttonVariants, type ButtonProps }
