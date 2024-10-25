import React from 'react'
import { Separator, SEPARATOR_VARIANT, SeparatorProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

const meta: Meta<typeof Separator> = {
  title: 'components/Separator',
  component: Separator,
  argTypes: {
    variant: { control: 'radio' },
  },
}

export default meta

const Template: StoryFn<typeof Separator> = (args: SeparatorProps) => <Separator {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: SEPARATOR_VARIANT.DEFAULT,
}

export const Dashed = Template.bind({})
Dashed.args = {
  variant: SEPARATOR_VARIANT.DASHED,
}

export const Dotted = Template.bind({})
Dotted.args = {
  variant: SEPARATOR_VARIANT.DOTTED,
}

export const Double = Template.bind({})
Double.args = {
  variant: SEPARATOR_VARIANT.DOUBLE,
}

export const Groove = Template.bind({})
Groove.args = {
  variant: SEPARATOR_VARIANT.GROOVE,
}

export const Ridge = Template.bind({})
Ridge.args = {
  variant: SEPARATOR_VARIANT.RIDGE,
}

export const Solid = Template.bind({})
Solid.args = {
  variant: SEPARATOR_VARIANT.SOLID,
}

export const Inset = Template.bind({})
Inset.args = {
  variant: SEPARATOR_VARIANT.INSET,
}

export const Outset = Template.bind({})
Outset.args = {
  variant: SEPARATOR_VARIANT.OUTSET,
}

export const Invert = Template.bind({})
Invert.args = {
  variant: SEPARATOR_VARIANT.INVERT,
}
