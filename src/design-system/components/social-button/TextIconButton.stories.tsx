import type {Meta, StoryObj} from '@storybook/react';
import TextIconButton from './TextIconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';

const meta = {
    title: 'MUI/Components/Button',
    component: TextIconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof TextIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextIconButtonStandard: Story = {
    args: {
        text: 'Button',
        icon: <DashboardIcon />,
        onClick: () => console.log('Button clicked'),
    },
};
