import React from 'react'
import { Loader, LoaderProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Loader> = {
  title: 'components/base/Loader',
  component: Loader,
  argTypes: {
    size: {
      control: {
        type: 'number',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<LoaderProps> = (args: LoaderProps) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 24,
}

export const Large = Template.bind({})
Large.args = {
  size: 48,
}

export const XLarge = Template.bind({})
XLarge.args = {
  size: 128,
}
