import React from 'react';
import {Metadata} from 'next';

import {Container} from '@mui/material';
import AppToolbar from '@/shared/components/AppToolbar';

export const metadata: Metadata = {
    title: 'Boris Bodin • Website',
    description:
        'Software Engineer. Web creator and educator about Code. I like to create things and help people who want to learn more and faster.',
};

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <AppToolbar />
            <Container maxWidth={false} sx={{pb: 2}}>
                {children}
            </Container>
        </>
    );
}
