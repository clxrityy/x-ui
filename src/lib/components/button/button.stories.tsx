import React from 'react'
import { Button, BUTTON_VARIANT, ButtonProps } from '.'
// import { objectValuesToControls } from "../../storybook-utils";
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
}

export default meta

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  variant: BUTTON_VARIANT.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  variant: BUTTON_VARIANT.SECONDARY,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Tertiary',
  variant: BUTTON_VARIANT.TERTIARY,
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Danger',
  variant: BUTTON_VARIANT.DANGER,
}
