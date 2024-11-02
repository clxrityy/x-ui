import { useScreenSize } from '.'
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

const Component = () => {
  const screenSize = useScreenSize()
  return (
    <div className="flex flex-col gap-6 items-center justify-center mx-auto">
      <h3 className="text-3xl font-bold">Screen Size</h3>
      <p>Change the window size to see the effect</p>
      <ul>
        <li>
          <strong>Width:</strong> <span className="font-mono font-light">{screenSize?.width}</span>
        </li>
        <li>
          <strong>Height:</strong> <span className="font-mono font-light">{screenSize?.height}</span>
        </li>
      </ul>
    </div>
  )
}

const meta: Meta<typeof useScreenSize> = {
  title: 'hooks/useScreenSize',
  component: Component,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

const Template: StoryFn<typeof Component> = () => <Component />

export const Visualize = Template.bind({})
Visualize.args = {}
