import React from 'react'
import { Spoiler, SpoilerProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Spoiler> = {
  title: 'components/Spoiler',
  component: Spoiler,
  argTypes: {
    previewText: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

const Template: StoryFn<SpoilerProps> = (args: SpoilerProps) => <Spoiler {...args} />
export const Default = Template.bind({})
Default.args = {
  previewText: 'Click me!',
  children: 'I am a spoiler',
}

export const Custom = Template.bind({})
Custom.args = {
  previewText: 'REVEAL SNIPPET',
  className: 'text-2xl hover:text-blue-600 transition-colors font-bold',
  size: 50,
  children: (
    <pre className="text-white rounded-md px-2 py-1 text-sm flex items-center justify-center gap-2 border font-medium shadow">
      <span className="text-blue-600/75">const</span>
      <span className="text-blue-300">name</span>
      <span className="text-blue-500/75">=</span>
      <span className="text-red-400/90">"John Doe"</span>
    </pre>
  ),
  Icons: {
    open: '+',
    close: '-',
  },
}
