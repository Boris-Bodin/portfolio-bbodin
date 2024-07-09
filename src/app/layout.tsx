import React from 'react';
import {Metadata} from 'next';

import '@/styles/styles.scss';
import ThemeWrapper from '../design-system/theme';

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
                <ThemeWrapper>{children}</ThemeWrapper>
            </body>
        </html>
    );
}
