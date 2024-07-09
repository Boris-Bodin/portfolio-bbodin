import type {Meta, StoryObj} from '@storybook/react';
import BBDevButton from './BBDevButton';
import DashboardIcon from '@mui/icons-material/Dashboard';

const meta = {
    title: 'MUI/Components/BBDev Button',
    component: BBDevButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof BBDevButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextIconButtonStandard: Story = {
    args: {
        text: 'Button',
        icon: <DashboardIcon />,
        onClick: () => console.log('Button clicked'),
    },
};
