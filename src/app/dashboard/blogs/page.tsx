'use client';
import React, {MouseEvent, useEffect, useState} from 'react';
import {Box, CircularProgress, Container, Grid} from '@mui/material';
import getMediumPost from '@/app/dashboard/blogs/actions';
import BBDevPageHeader from '../../../design-system/components/page-header/BBDevPageHeader';
import BBDevCard from '../../../design-system/components/card/BBDevCard';

interface Article {
    title: string;
    link: string;
    contentSnippet: string;
    image: string;
    isoDate: string;
}

export default function BlogsPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getMediumPost();
                const items = data.map((item: any) => ({
                    title: item.title || '',
                    link: item.link || '',
                    contentSnippet: item.contentSnippet || '',
                    image: item.content.split('src="')[1].split('"')[0] || '',
                    isoDate: item.isoDate || '',
                }));
                setArticles(items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Medium articles:', error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center' minHeight='60vh'>
                <CircularProgress />
            </Box>
        );
    }

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
