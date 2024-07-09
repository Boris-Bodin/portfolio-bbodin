import React from 'react';
import {Container, Grid, Paper, Typography, Box, Button} from '@mui/material';
import styles from '@/styles/components/Courses.module.scss';

const courses = [
    {
        title: 'WIP',
        description: 'WIP',
        image: '/images/course1.jpg',
        link: '',
    },
    // {
    //     title: 'Course Two',
    //     description: 'A brief description of Course Two.',
    //     image: '/images/course2.jpg',
    //     link: 'https://linktocoursetwo.com',
    // },
    // {
    //     title: 'Course Three',
    //     description: 'A brief description of Course Three.',
    //     image: '/images/course3.jpg',
    //     link: 'https://linktocoursethree.com',
    // },
];

export default function CoursesPage() {
    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <Typography variant='h3' component='h1' gutterBottom className={styles.header}>
                My Courses
            </Typography>
            <Typography variant='body1' paragraph className={styles.description}>
                Here are some of the courses I&apos;ve created or taught.
            </Typography>
            <Grid container spacing={4}>
                {courses.map((course, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} className={styles.courseCard}>
                            <Box className={styles.imageContainer}>
                                <img src={course.image} alt={course.title} className={styles.courseImage} />
                            </Box>
                            <Box className={styles.courseContent}>
                                <Typography variant='h6' component='h3' className={styles.courseTitle}>
                                    {course.title}
                                </Typography>
                                <Typography variant='body2' className={styles.courseDescription}>
                                    {course.description}
                                </Typography>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    href={course.link}
                                    target='_blank'
                                    rel='noopener'
                                    className={styles.courseButton}>
                                    View Course
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
