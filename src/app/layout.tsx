import React from 'react';
import {Metadata} from 'next';

import '@/styles/styles.scss';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import theme from '../design-system/theme';
import {CssBaseline, Experimental_CssVarsProvider} from '@mui/material';

export const metadata: Metadata = {
    title: 'Boris Bodin • Website',
    description:
        'Software Engineer. Web creator and educator about Code. I like to create things and help people who want to learn more and faster.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                {/*<meta name="robots" content="noindex, nofollow" />*/}
                <link rel='icon' href='https://www.google.com/s2/favicons?sz=64&amp;domain_url=bbodin.dev' />
            </head>
            <body suppressHydrationWarning={true}>
                <React.StrictMode>
                    <AppRouterCacheProvider>
                        <Experimental_CssVarsProvider theme={theme}>
                            <CssBaseline />
                            {children}
                        </Experimental_CssVarsProvider>
                    </AppRouterCacheProvider>
                </React.StrictMode>
            </body>
        </html>
    );
}
