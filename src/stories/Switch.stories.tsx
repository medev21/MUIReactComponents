// ASSETS
import Info from 'src/assets/Info';
// COMPONENTS
import { FormLabel } from 'src/components/FormLabel';
import { Switch } from 'src/components/Switch';
// DEPENDENCIES
import type { Meta, StoryObj } from '@storybook/react';
// THEMES
import { palette } from 'src/theme/mainTheme';

// More on how to set up stories at: [https://storybook.js.org/docs/writing-stories#default-export](https://storybook.js.org/docs/writing-stories#default-export)
const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: [https://storybook.js.org/docs/configure/story-layout](https://storybook.js.org/docs/configure/story-layout)
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: [https://storybook.js.org/docs/writing-docs/autodocs](https://storybook.js.org/docs/writing-docs/autodocs)
    tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: [https://storybook.js.org/docs/writing-stories/args](https://storybook.js.org/docs/writing-stories/args)
export const Primary: Story = {
    args: {
        formLabel: 'Switch Label',
    },
};

export const DisabledOn: Story = {
    args: {
        checked: true,
        formLabel: 'Switch Label',
        disabled: true,
    },
};

export const DisabledOff: Story = {
    args: {
        checked: false,
        formLabel: 'Switch Label',
        disabled: true,
    },
};

export const WithEndAdornment: Story = {
    args: {
        formLabel: (
            <FormLabel
                label={'SwitchLabel'}
                stackProps={{
                    sx: { mb: 0}
                }}
                endAdornment={<Info />}
                sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    color: palette.neutral[900],
                }}
            />
        )
    },
};

export const WithStartAdornment: Story = {
    args: {
        formLabel: (
            <FormLabel
                label={'SwitchLabel'}
                stackProps={{
                    sx: { mb: 0}
                }}
                startAdornment={<Info />}
                sx={{
                    textTransform: 'none',
                    fontSize: '16px',
                    color: palette.neutral[900],
                }}
            />
        )
    },
}
