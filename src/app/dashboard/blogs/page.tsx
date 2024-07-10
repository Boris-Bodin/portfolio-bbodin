'use client';
import React, {useEffect, useState} from 'react';
import {Container, Grid, Paper, Typography, Box, Button, CircularProgress} from '@mui/material';
import styles from '@/styles/components/Blogs.module.scss';
import getMediumPost from '@/app/dashboard/blogs/actions';

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
                console.log(data);
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

    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <Typography variant='h3' component='h1' gutterBottom className={styles['header']}>
                My Blog
            </Typography>
            <Typography variant='body1' paragraph className={styles['description']}>
                Here are the latest articles from my Medium blog.
            </Typography>
            <Grid container spacing={4}>
                {articles.map((article, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} className={styles['blogCard']}>
                            <Box className={styles['imageContainer']}>
                                <img src={article.image} alt={article.title} className={styles['blogImage']} />
                            </Box>
                            <Box className={styles['blogContent']}>
                                <Typography variant='h6' component='h3' className={styles['blogTitle']}>
                                    {article.title}
                                </Typography>
                                <Typography variant='body2' className={styles['blogDescription']}>
                                    {article.contentSnippet}
                                </Typography>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    href={article.link}
                                    target='_blank'
                                    rel='noopener'
                                    className={styles['blogButton']}>
                                    Read More
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
