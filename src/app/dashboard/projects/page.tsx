import React from 'react';
import {Container, Grid, Paper, Typography, Box, Button} from '@mui/material';
import styles from '@/styles/components/Projects.module.scss';

const projects = [
    {
        title: 'WIP',
        description: 'WIP',
        image: '/images/project1.jpg',
        link: '',
    },
    // {
    //     title: 'Project Two',
    //     description: 'A brief description of Project Two.',
    //     image: '/images/project2.jpg',
    //     link: 'https://github.com/username/project-two',
    // },
    // {
    //     title: 'Project Three',
    //     description: 'A brief description of Project Three.',
    //     image: '/images/project3.jpg',
    //     link: 'https://github.com/username/project-three',
    // },
];

export default function ProjectsPage() {
    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <Typography variant='h3' component='h1' gutterBottom className={styles.header}>
                My Projects
            </Typography>
            <Typography variant='body1' paragraph className={styles.description}>
                Here are some of the projects I&apos;ve worked on.
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} className={styles.projectCard}>
                            <Box className={styles.imageContainer}>
                                <img src={project.image} alt={project.title} className={styles.projectImage} />
                            </Box>
                            <Box className={styles.projectContent}>
                                <Typography variant='h6' component='h3' className={styles.projectTitle}>
                                    {project.title}
                                </Typography>
                                <Typography variant='body2' className={styles.projectDescription}>
                                    {project.description}
                                </Typography>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    href={project.link}
                                    target='_blank'
                                    rel='noopener'
                                    className={styles.projectButton}>
                                    View Project
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
