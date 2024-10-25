import React from "react";
import { Card, CardProps, CARD_VARIANT } from ".";
import { Meta } from "@storybook/react";
import { StoryFn } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof Card> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Default",
    variant: CARD_VARIANT.DEFAULT,
    children: "This is an example of a default card.",
}

export const Centered = Template.bind({});
Centered.args = {
    title: "Centered",
    variant: CARD_VARIANT.CENTERED,
    children: "This is an example of a centered card.",
}

export const Inverted = Template.bind({});
Inverted.args = {
    title: "Inverted",
    variant: CARD_VARIANT.INVERTED,
    children: "This is an example of an inverted card.",
}

export const Shadow = Template.bind({});
Shadow.args = {
    title: "Shadow",
    variant: CARD_VARIANT.SHADOW,
    children: "This is an example of a shadow card.",
}