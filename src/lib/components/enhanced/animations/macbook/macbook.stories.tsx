import React from 'react'
import { MacbookAnimation, MacBookAnimationProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof MacbookAnimation> = {
  title: 'components/enhanced/animations/MacbookAnimation',
  component: MacbookAnimation,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<MacBookAnimationProps> = (args: MacBookAnimationProps) => <MacbookAnimation {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
}

export const Custom = Template.bind({})
Custom.args = {
  className: 'invert',
}
