import React from 'react'
import { Separator, SeparatorProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Separator> = {
  title: 'components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta

const Template: StoryFn<SeparatorProps> = (args: SeparatorProps) => <Separator {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = {
  orientation: 'horizontal',
  className: 'w-screen mx-auto',
}

export const Vertical = Template.bind({})
Vertical.args = {
  orientation: 'vertical',
  className: 'h-40 mx-auto',
}
