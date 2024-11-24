import React from 'react'
import { FlipCard, FlipCardProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof FlipCard> = {
  title: 'components/enhanced/cards/FlipCard',
  component: FlipCard,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    front: {
      control: {
        type: 'text',
      },
    },
    back: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<FlipCardProps> = (args: FlipCardProps) => <FlipCard {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
  front: 'Front',
  back: 'Back',
}

export const Custom = Template.bind({})
Custom.args = {
  className: 'invert grayscale',
  front: 'Front (custom)',
  back: 'Back (custom)',
}
