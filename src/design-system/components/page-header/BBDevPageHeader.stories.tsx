import type {Meta, StoryObj} from '@storybook/react';
import BBDevPageHeader from './BBDevPageHeader';

const meta = {
    title: 'MUI/Components/BBDev PageHeader',
    component: BBDevPageHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof BBDevPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageHeaderStandard: Story = {
    args: {
        title: 'Titre',
        subTitle: ['Sous titre'],
    },
};
