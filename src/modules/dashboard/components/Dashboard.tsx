'use client';
import React from 'react';
import {Container} from '@mui/material';
import {Article, Code, Email, Folder, School} from '@mui/icons-material';
import Link from 'next/link';
import BBDevCard from '../../../design-system/components/card/BBDevCard';
import BBDevPageHeader from '../../../design-system/components/page-header/BBDevPageHeader';
import GridContainer from '@/shared/components/containers/GridContainer';
import GridItem from '@/shared/components/containers/GridItem';
import {useTranslation} from 'react-i18next';

export default function Dashboard() {
    const {t} = useTranslation('dashboard');

    return (
        <>
            <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
                <BBDevPageHeader title={t('title')} subTitle={[t('welcomeMessage'), t('subTitle')]}></BBDevPageHeader>
                <GridContainer container spacing={4}>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/skills'}>
                            <BBDevCard
                                title={t('cards.skills.title')}
                                description={t('cards.skills.description')}
                                icon={<Code fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/projects'}>
                            <BBDevCard
                                title={t('cards.projects.title')}
                                description={t('cards.projects.description')}
                                icon={<Folder fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/courses'}>
                            <BBDevCard
                                title={t('cards.courses.title')}
                                description={t('cards.courses.description')}
                                icon={<School fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/contact'}>
                            <BBDevCard
                                title={t('cards.contact.title')}
                                description={t('cards.contact.description')}
                                icon={<Email fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                    <GridItem item xs={12} md={4}>
                        <Link href={'/dashboard/blogs'}>
                            <BBDevCard
                                title={t('cards.blogs.title')}
                                description={t('cards.blogs.description')}
                                icon={<Article fontSize='large' />}></BBDevCard>
                        </Link>
                    </GridItem>
                </GridContainer>
            </Container>
        </>
    );
}
