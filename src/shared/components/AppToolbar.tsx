'use client';
import React from 'react';

import {AppBar, Avatar, Box, Button, styled, Toolbar, Typography} from '@mui/material';
import Link from 'next/link';
import LanguageChanger from '@/shared/components/LanguageChanger';
import CenterRowBox from '@/shared/components/CenterRowBox';

const HeaderHomeLink = styled(CenterRowBox)(({theme}) => ({
    gap: theme.spacing(4),
}));

export default function AppToolbar() {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Link href={'/'}>
                    <HeaderHomeLink>
                        <Avatar alt='Boris Bodin' src='/static/images/avatar.jpg' />
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
                    <LanguageChanger />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
