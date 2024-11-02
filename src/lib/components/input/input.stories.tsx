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

export const Text = Template.bind({})
Text.args = {
  placeholder: 'Text input',
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Password',
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'example@address.com',
  className: 'invalid:ring-red-500 invalid:border-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500',
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  placeholder: '0',
}
