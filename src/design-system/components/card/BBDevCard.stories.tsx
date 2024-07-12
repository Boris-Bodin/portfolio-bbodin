import type {Meta, StoryObj} from '@storybook/react';
import BBDevCard from './BBDevCard';

const meta = {
    title: 'MUI/Components/BBDev Card',
    component: BBDevCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof BBDevCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardStandard: Story = {
    args: {
        title: 'Titre',
        description: 'Description',
    },
};
