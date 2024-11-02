import React from 'react'
import { useFetch } from '.'
import { Meta, StoryFn } from '@storybook/react'

const Component = () => {
  const { data, error } = useFetch('https://api.ipify.org?format=json')

  return (
    <div className="flex flex-col gap-6 items-center justify-center mx-auto">
      <h3 className="text-3xl font-bold">Random API Fetch</h3>
      <p>
        Fetching your IP address from{' '}
        <a
          href="https://api.ipify.org/"
          className="text-blue-500 hover:underline hover:text-blue-600 focus:text-blue-700"
          target="_blank"
          rel="noreferrer"
        >
          api.ipify.org
        </a>
      </p>
      <ul>
        <li>
          <pre className="font-mono font-light bg-gray-100/50 px-2 py-2 rounded-md">
            {JSON.stringify(data, null, 2)}
          </pre>
        </li>
        {error && (
          <li className="text-red-600">
            <strong>Error:</strong>
            <pre className="font-mono font-light bg-red-100/50 px-2 py-2 rounded-md">{error}</pre>
          </li>
        )}
      </ul>
    </div>
  )
}

const meta: Meta<typeof Component> = {
  title: 'hooks/useFetch',
  component: Component,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

const Template: StoryFn<typeof Component> = () => <Component />

export const Visualize = Template.bind({})
Visualize.args = {}
