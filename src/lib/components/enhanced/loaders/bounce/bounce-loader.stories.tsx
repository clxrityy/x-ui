import React from 'react'
import { BounceLoader, BounceLoaderProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof BounceLoader> = {
  title: 'components/enhanced/loaders/BounceLoader',
  component: BounceLoader,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<BounceLoaderProps> = (args: BounceLoaderProps) => <BounceLoader {...args} />

export const Default = Template.bind({})

export const Custom = Template.bind({})
Custom.args = {
  className: 'grayscale',
}
