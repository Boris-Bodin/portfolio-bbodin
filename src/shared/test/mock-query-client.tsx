import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function mockQueryClient(children: React.ReactNode) {
    return (<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)
};
