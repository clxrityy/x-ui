import React from 'react'
import { Skeleton, SkeletonProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Skeleton> = {
  title: 'components/base/Skeleton',
  component: Skeleton,
  argTypes: {
    borderRadius: {
      control: {
        type: 'number',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
  },
}

export default meta

const Template: StoryFn<SkeletonProps> = (args: SkeletonProps) => <Skeleton {...args} />
export const Default = Template.bind({})
Default.args = {
  width: 250,
  height: 100,
}

export const Circle = Template.bind({})
Circle.args = {
  width: 100,
  height: 100,
  borderRadius: 50,
}

export const Custom = Template.bind({})
Custom.args = {
  width: 250,
  height: 100,
  variant: 'rectangle',
  className: 'bg-red-500/25',
}
