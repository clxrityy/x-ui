import React from 'react'
import { Input, InputProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Default input',
}
