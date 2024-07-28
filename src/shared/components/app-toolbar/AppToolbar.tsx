'use client';
import React from 'react';

import {AppBar, Avatar, Box, Button, styled, Toolbar, Typography} from '@mui/material';
import Link from 'next/link';

const HeaderHomeLink = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '25px',
    alignItems: 'center',
}));

export default function AppToolbar() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Link href={'/'}>
                    <HeaderHomeLink>
                        <Avatar alt='Boris Bodin' src='/images/avatar.jpg' />
                        <Typography variant='h1'>Boris Bodin</Typography>
                    </HeaderHomeLink>
                </Link>
                <Box sx={{flexGrow: 1}}></Box>

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
        </AppBar>
    );
}
