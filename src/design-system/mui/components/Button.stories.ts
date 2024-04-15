import type {Meta, StoryObj} from '@storybook/react';
import {Button} from '@mui/material';

const meta = {
    title: 'MUI/Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStandard: Story = {
    args: {
        children: 'Button',
    },
};
