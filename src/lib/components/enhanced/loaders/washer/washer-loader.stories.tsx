import React from 'react'
import { WasherLoader, WasherLoaderProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof WasherLoader> = {
  title: 'components/enhanced/loaders/WasherLoader',
  component: WasherLoader,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<WasherLoaderProps> = (args: WasherLoaderProps) => <WasherLoader {...args} />
export const Default = Template.bind({})
Default.args = {
  className: '',
}

export const Custom = Template.bind({})
Custom.args = {
  className: 'invert',
}
