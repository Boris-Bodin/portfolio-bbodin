'use client';
import React, {MouseEvent} from 'react';
import {Container, Grid} from '@mui/material';
import BBDevPageHeader from '../../../design-system/components/page-header/BBDevPageHeader';
import BBDevCard from '../../../design-system/components/card/BBDevCard';
import {Article} from '@/modules/blogs/types/article';

interface BlogsProps {
    articles: Array<Article>;
}

export default function Blogs({articles}: BlogsProps) {
    const openArticle = (link: string) => {
        return (event: MouseEvent<Element>) => window.open(link, '_blank');
    };

    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <BBDevPageHeader title={'My Blog'} subTitle={['Here are the latest articles.']}></BBDevPageHeader>
            <Grid container spacing={4}>
                {articles.map((article, index) => (
                    <Grid item xs={12} md={4} key={index} className={'grid-item'}>
                        <BBDevCard
                            title={article.title}
                            description={article.contentSnippet}
                            image={article.image}
                            actionTitle={'Read more'}
                            action={openArticle(article.link)}></BBDevCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
