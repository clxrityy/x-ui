import React from 'react'
import { Button, ButtonProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import { ICONS } from '../../../config'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Destructive = Template.bind({})
Destructive.args = {
  children: 'Destructive',
  variant: 'destructive',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  variant: 'outline',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
}

export const Ghost = Template.bind({})
Ghost.args = {
  children: 'Ghost',
  variant: 'ghost',
}

export const Link = Template.bind({})
Link.args = {
  children: 'Link',
  variant: 'link',
  className: 'hover:scale-100',
}

export const Icon = Template.bind({})
Icon.args = {
  children: <ICONS.CLICK size={50} />,
  size: 'icon',
  className: 'bg-gray-100/35 text-black hover:text-white hover:scale-100',
}
