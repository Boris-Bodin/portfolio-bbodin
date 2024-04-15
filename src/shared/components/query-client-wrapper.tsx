'use client';

import React from 'react';
import '@/styles/styles.scss';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function QueryClientWrapper({children}: {children: React.ReactNode}) {
    const [queryClient] = React.useState(() => new QueryClient());

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
