import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";

// The main configuration for the component's stories
const meta = {
  title: "Library/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This tag tells Storybook to automatically generate documentation
  tags: ["autodocs"],
  // Define controls for props so you can interact with them in the Storybook UI
  argTypes: {
    text: { control: "text", description: "The content of the button." },
    disabled: { control: "boolean", description: "Disables the button." },
    onClick: { action: "clicked", description: "Optional click handler." },
  },
  // Default args for all stories
  args: {
    text: "Button Text",
    disabled: false,
    onClick: fn(), // Use `fn()` to spy on clicks and see them in the "Actions" tab
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is the primary story for the button. It shows the default, enabled state.
 */
export const Primary: Story = {
  args: {
    text: "Primary Button",
  },
};

/**
 * A disabled button is not clickable and should have a distinct visual state.
 * The `onClick` handler here will not fire, which you can verify in the Actions tab.
 */
export const Disabled: Story = {
  args: {
    text: "Disabled Button",
    disabled: true,
  },
};

/**
 * This story demonstrates how the button handles long text content.
 */
export const WithLongText: Story = {
  args: {
    text: "This is a button with very, very long text content",
  },
};

/**
 * Emojis and other special characters should render correctly inside the button.
 */
export const WithEmoji: Story = {
  args: {
    text: "🚀 Launch!",
  },
};
