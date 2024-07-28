'use client';
import React from 'react';
import {Container, Grid, styled, Typography} from '@mui/material';
import {Article, Code, Email, Folder, School} from '@mui/icons-material';
import Link from 'next/link';
import BBDevCard from '../../design-system/components/card/BBDevCard';
import BBDevPageHeader from '../../design-system/components/page-header/BBDevPageHeader';

const GridContainer = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
}));

const GridItem = styled(Grid)(({theme}) => ({
    display: 'flex',
    '&>*': {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        '&>*': {
            flex: 'auto',
        },
    },
}));

export default function Page() {
    return (
        <>
            <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
                <BBDevPageHeader
                    title={'Welcome to My Portfolio'}
                    subTitle={[
                        "Hi, I'm Boris Bodin",
                        "I'm a Software Engineer, web creator, and educator passionate about code. I love to create things and help people who want to learn more and faster.",
                    ]}>
                    <Typography variant='body1' paragraph></Typography>
                </BBDevPageHeader>
                <GridContainer container spacing={4}>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/skills'}>
                            <BBDevCard
                                title={'Skills'}
                                description={'Explore my technical skills and expertise.'}
                                icon={<Code fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/projects'}>
                            <BBDevCard
                                title={'Projects'}
                                description={"Check out the projects I've worked on."}
                                icon={<Folder fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/courses'}>
                            <BBDevCard
                                title={'Courses'}
                                description={'Discover the courses I offer.'}
                                icon={<School fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/contact'}>
                            <BBDevCard
                                title={'Contact'}
                                description={'Get in touch with me.'}
                                icon={<Email fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/blogs'}>
                            <BBDevCard
                                title={'Blogs'}
                                description={'Read my latest blog posts.'}
                                icon={<Article fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                </GridContainer>
            </Container>
        </>
    );
}
