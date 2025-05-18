// ASSETS
import Info from 'src/assets/Info';
// COMPONENTS
import { Checkbox } from 'src/components/Checkbox';
import { FormLabel } from 'src/components/FormLabel';
// DEPENDENCIES
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: [https://storybook.js.org/docs/writing-stories#default-export](https://storybook.js.org/docs/writing-stories#default-export)
const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: [https://storybook.js.org/docs/configure/story-layout](https://storybook.js.org/docs/configure/story-layout)
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: [https://storybook.js.org/docs/writing-docs/autodocs](https://storybook.js.org/docs/writing-docs/autodocs)
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: [https://storybook.js.org/docs/writing-stories/args](https://storybook.js.org/docs/writing-stories/args)
export const Checked: Story = {
    args: {
        value: true,
        formLabel: 'Checkbox Label',
    },
};

export const CheckedWithEndAdornment: Story = {
    args: {
        value: true,
        formLabel: (
            <FormLabel
                label="Checkbox Label"
                endAdornment={<Info />}
                stackProps={{
                    sx: { mb: 0}
                }}
            />
        ),
    },
}

export const CheckedWithStartAdornment: Story = {
    args: {
        value: true,
        formLabel: (
            <FormLabel
                label="Checkbox Label"
                startAdornment={<Info />}
                stackProps={{
                    sx: { mb: 0}
                }}
            />
        ),
    },
}

export const Unchecked: Story = {
    args: {
        value: undefined,
        formLabel: 'Checkbox Label',
    },
};
