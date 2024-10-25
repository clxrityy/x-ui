import React from 'react'
import { Input, InputProps, INPUT_VARIANT } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
  },
}

export default meta

const Template: StoryFn<typeof Input> = (args: InputProps) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Default',
  variant: INPUT_VARIANT.DEFAULT,
}

export const Underline = Template.bind({})
Underline.args = {
  placeholder: 'Underline',
  variant: INPUT_VARIANT.UNDERLINE,
}

export const Outline = Template.bind({})
Outline.args = {
  placeholder: 'Outline',
  variant: INPUT_VARIANT.OUTLINE,
}

export const ShadowInner = Template.bind({})
ShadowInner.args = {
  placeholder: 'ShadowInner',
  variant: INPUT_VARIANT.SHADOW_INNER,
}

export const Shadow = Template.bind({})
Shadow.args = {
  placeholder: 'Shadow',
  variant: INPUT_VARIANT.SHADOW,
}
