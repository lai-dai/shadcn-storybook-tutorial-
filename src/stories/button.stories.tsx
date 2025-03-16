import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "~/components/ui/button"

import { fn } from "@storybook/test"
import React from "react"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/ui/button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: {
        disable: true,
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    children: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    disabled: false,
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    disabled: false,
  },
}

export const AllVarian = Button.bind({}) as Story

AllVarian.args = {
  disabled: false,
  children: "Button",
}

type ButtonProps = React.ComponentProps<typeof Button>

AllVarian.decorators = () => {
  return (
    <div className="space-x-3">
      <Button
        variant={"default"}
        size={"default"}
        {...(AllVarian.args as ButtonProps)}
      />
      <Button
        variant={"destructive"}
        size={"default"}
        {...(AllVarian.args as ButtonProps)}
      />
      <Button
        variant={"ghost"}
        size={"default"}
        {...(AllVarian.args as ButtonProps)}
      />
    </div>
  )
}
