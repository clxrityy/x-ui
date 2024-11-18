import React from 'react'
import { Textarea, type TextareaProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Textarea> = {
  title: 'components/base/Textarea',
  component: Textarea,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    onChange: {
      action: 'onChange',
    },
  },
}

export default meta

const Template: StoryFn<TextareaProps> = (args: TextareaProps) => <Textarea {...args} />
export const Default = Template.bind({
  placeholder: 'Type something...',
})
