import { useLocation } from '.'
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

const Component = () => {
  const { location, error, loading } = useLocation()

  return (
    <div className="flex flex-col gap-6 items-center justify-center mx-auto">
      <h3 className="text-3xl font-bold">Location</h3>
      {loading ? (
        <span>Loading...</span>
      ) : (
        location && (
          <pre className="font-mono font-light bg-gray-100/50 px-2 py-2 rounded-md">
            {JSON.stringify(location, null, 2)}
          </pre>
        )
      )}
      {error && (
        <div className="text-red-600">
          <strong>Error:</strong>
          <pre className="font-mono font-light bg-red-100/50 px-2 py-2 rounded-md">{error}</pre>
        </div>
      )}
    </div>
  )
}

const meta: Meta<typeof useLocation> = {
  title: 'hooks/useLocation',
  component: Component,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

const Template: StoryFn<typeof Component> = () => <Component />

export const Visualize = Template.bind({})
Visualize.args = {}
