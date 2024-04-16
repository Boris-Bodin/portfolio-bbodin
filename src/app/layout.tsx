import React from 'react';
import {Metadata} from 'next';

import '@/styles/styles.scss';
import {Box, Container, AppBar, Button, Toolbar, Avatar} from '@mui/material';
import Link from 'next/link';

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
                <link rel='icon' href='https://www.google.com/s2/favicons?sz=64&amp;domain_url=melvynx.com' />
            </head>
            <body suppressHydrationWarning={true}>
                <AppBar position={'static'}>
                    <Container maxWidth={false}>
                        <Toolbar>
                            <Box sx={{flexGrow: 1}}>
                                <Avatar alt='Boris Bodin' src='/images/avatar.png' />
                            </Box>

                            <Box sx={{flexGrow: 0}}>
                                <Link href={'/'}>
                                    <Button color='inherit'>Home</Button>
                                </Link>
                                <Link href={'/'}>
                                    <Button color='inherit'>Skills</Button>
                                </Link>
                                <Link href={'/'}>
                                    <Button color='inherit'>Projects</Button>
                                </Link>
                                <Link href={'/'}>
                                    <Button color='inherit'>Courses</Button>
                                </Link>
                                <Link href={'/'}>
                                    <Button color='inherit'>Contact</Button>
                                </Link>
                                <Link href={'/'}>
                                    <Button color='inherit'>Blogs</Button>
                                </Link>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                {children}
            </body>
        </html>
    );
}
