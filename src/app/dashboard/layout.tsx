import React from 'react';
import {Metadata} from 'next';

import {AppBar, Avatar, Box, Button, Container, Toolbar} from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Boris Bodin • Website',
    description:
        'Software Engineer. Web creator and educator about Code. I like to create things and help people who want to learn more and faster.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <AppBar position={'static'}>
                <Container maxWidth={false}>
                    <Toolbar>
                        <Box sx={{flexGrow: 1}}>
                            <Avatar alt='Boris Bodin' src='/images/avatar.jpg' />
                        </Box>

                        <Box sx={{flexGrow: 0}}>
                            <Link href={'/dashboard'}>
                                <Button color='inherit'>Home</Button>
                            </Link>
                            <Link href={'/dashboard/skills'}>
                                <Button color='inherit'>Skills</Button>
                            </Link>
                            <Link href={'/dashboard/projects'}>
                                <Button color='inherit'>Projects</Button>
                            </Link>
                            <Link href={'/dashboard/courses'}>
                                <Button color='inherit'>Courses</Button>
                            </Link>
                            <Link href={'/dashboard/contact'}>
                                <Button color='inherit'>Contact</Button>
                            </Link>
                            <Link href={'/dashboard/blogs'}>
                                <Button color='inherit'>Blogs</Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </>
    );
}
