import React from 'react';

import {Container} from '@mui/material';
import AppToolbar from '@/shared/components/AppToolbar';

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
