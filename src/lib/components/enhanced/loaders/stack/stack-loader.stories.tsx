import React from 'react'
import { StackLoader, StackLoaderProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof StackLoader> = {
  title: 'components/enhanced/loaders/StackLoader',
  component: StackLoader,
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<StackLoaderProps> = (args: StackLoaderProps) => <StackLoader {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
}

export const Custom = Template.bind({})
Custom.args = {
  className: 'invert',
}
