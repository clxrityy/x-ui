import React, { ComponentProps } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Select> = {
  title: 'components/base/Select',
  component: Select,
}

export default meta

const Template: StoryFn<any> = (args: ComponentProps<typeof Select>) => <Select {...args} />

export const Example = Template.bind({})
Example.args = {
  children: (
    <>
      <SelectTrigger key="trigger" className="w-[280px]">
        <SelectValue placeholder="Select something" />
      </SelectTrigger>
      <SelectContent key="content">
        <SelectGroup>
          <SelectLabel>Group 1</SelectLabel>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
          <SelectItem value="3">Option 3</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Group 2</SelectLabel>
          <SelectItem value="4">Option 4</SelectItem>
          <SelectItem value="5">Option 5</SelectItem>
          <SelectItem value="6">Option 6</SelectItem>
        </SelectGroup>
      </SelectContent>
    </>
  ),
}
