import React from 'react';
import {Container, Grid, Paper, Typography, Box} from '@mui/material';
import {Code, Build, Computer, Storage, Security, Language} from '@mui/icons-material';
import styles from '@/styles/components/Skills.module.scss';

const skills = [
    {icon: <Code fontSize='large' />, title: 'Programming Languages', description: 'JavaScript, TypeScript, Python, Java, C#'},
    {icon: <Build fontSize='large' />, title: 'Frameworks & Libraries', description: 'React, Next.js, Node.js, Spring, Angular'},
    {icon: <Computer fontSize='large' />, title: 'Front-end Development', description: 'HTML, CSS, SASS, Tailwind CSS'},
    {icon: <Storage fontSize='large' />, title: 'Data Management', description: 'MongoDB, PostgreSQL, BigQuery'},
    {icon: <Security fontSize='large' />, title: 'DevOps & Security', description: 'Docker, Kubernetes, AWS, CI/CD'},
    {icon: <Language fontSize='large' />, title: 'Other Skills', description: 'Git, Agile Methodologies, TDD, BDD'},
];

export default function SkillsPage() {
    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <Typography variant='h3' component='h1' gutterBottom className={styles.header}>
                My Skills
            </Typography>
            <Typography variant='body1' paragraph className={styles.description}>
                Here are some of the technical skills I&apos;ve acquired over the years.
            </Typography>
            <Grid container spacing={4}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} className={styles.skillCard}>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                {skill.icon}
                                <Typography variant='h6' component='h3' className={styles.skillTitle}>
                                    {skill.title}
                                </Typography>
                                <Typography variant='body2' className={styles.skillDescription}>
                                    {skill.description}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
