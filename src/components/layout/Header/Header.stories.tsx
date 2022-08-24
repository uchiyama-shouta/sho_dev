import Header from "./index";

import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Header;
type Story = ComponentStoryObj<T>;

export default {
  title: "Header",
  component: Header,
  // args: { children: "送信する", onClick: () => alert("clicked!") },
} as ComponentMeta<T>;

export const Default: Story = {};
