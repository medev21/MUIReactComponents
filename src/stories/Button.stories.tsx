// ASSETS
import CheckCircle from 'src/assets/CheckCircle';
// COMPONENTS
import { Button } from 'src/components/Button';
// DEPENDENCIES
import type { Meta, StoryObj } from '@storybook/react';
// THEME
// import { palette } from 'src/theme/mainTheme';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
    args: {
        variant: 'contained',
        color: 'primary',
        children: 'Button',
        startIcon: <CheckCircle />,
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        startIcon: <CheckCircle />,
        children: 'Button',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        startIcon: <CheckCircle />,
        children: 'Button',
    },
};

export const DisabledContained: Story = {
    args: {
        variant: 'contained',
        startIcon: <CheckCircle />,
        children: 'Button',
        disabled: true,
    },
};

export const DisabledOutlined: Story = {
    args: {
        variant: 'outlined',
        startIcon: <CheckCircle />,
        children: 'Button',
        disabled: true,
    },
};

export const DisabledText: Story = {
    args: {
        variant: 'text',
        startIcon: <CheckCircle />,
        children: 'Button',
        disabled: true,
    },
};
