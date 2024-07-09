import React from 'react';
import {Box, Container, Typography, Grid, Paper, IconButton} from '@mui/material';
import {Code, Folder, School, Email, Article} from '@mui/icons-material';
import Link from 'next/link';
import styles from '@/styles/components/Home.module.scss';

export default function Page() {
    return (
        <>
            <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
                <Box className={styles.hero}>
                    <Typography variant='h3' component='h1' gutterBottom>
                        Welcome to My Portfolio
                    </Typography>
                    <Typography variant='h5' component='h2' gutterBottom>
                        Hi, I&apos;m Boris Bodin
                    </Typography>
                    <Typography variant='body1' paragraph>
                        I&apos;m a Software Engineer, web creator, and educator passionate about code. I love to create things and
                        help people who want to learn more and faster.
                    </Typography>
                </Box>

                <Grid container spacing={4} className={styles.gridContainer}>
                    <Grid item xs={12} md={4}>
                        <Link href={'/dashboard/skills'}>
                            <Paper elevation={3} className={styles.paper}>
                                <IconButton color='primary' aria-label='skills'>
                                    <Code fontSize='large' />
                                </IconButton>
                                <Typography variant='h6' component='h3'>
                                    Skills
                                </Typography>
                                <Typography variant='body2'>Explore my technical skills and expertise.</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href={'/dashboard/projects'}>
                            <Paper elevation={3} className={styles.paper}>
                                <IconButton color='primary' aria-label='projects'>
                                    <Folder fontSize='large' />
                                </IconButton>
                                <Typography variant='h6' component='h3'>
                                    Projects
                                </Typography>
                                <Typography variant='body2'>Check out the projects I&apos;ve worked on.</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href={'/dashboard/courses'}>
                            <Paper elevation={3} className={styles.paper}>
                                <IconButton color='primary' aria-label='courses'>
                                    <School fontSize='large' />
                                </IconButton>
                                <Typography variant='h6' component='h3'>
                                    Courses
                                </Typography>
                                <Typography variant='body2'>Discover the courses I offer.</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href={'/dashboard/contact'}>
                            <Paper elevation={3} className={styles.paper}>
                                <IconButton color='primary' aria-label='contact'>
                                    <Email fontSize='large' />
                                </IconButton>
                                <Typography variant='h6' component='h3'>
                                    Contact
                                </Typography>
                                <Typography variant='body2'>Get in touch with me.</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Link href={'/dashboard/blogs'}>
                            <Paper elevation={3} className={styles.paper}>
                                <IconButton color='primary' aria-label='blogs'>
                                    <Article fontSize='large' />
                                </IconButton>
                                <Typography variant='h6' component='h3'>
                                    Blogs
                                </Typography>
                                <Typography variant='body2'>Read my latest blog posts.</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
