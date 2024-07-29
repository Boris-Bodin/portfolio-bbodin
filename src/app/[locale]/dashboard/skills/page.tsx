'use client';
import React from 'react';
import {Container, Grid} from '@mui/material';
import {Build, Code, Computer, Language, Security, Storage} from '@mui/icons-material';
import BBDevPageHeader from '../../../../design-system/components/page-header/BBDevPageHeader';
import BBDevCard from '../../../../design-system/components/card/BBDevCard';

const skills = [
    {
        icon: <Code fontSize='large' />,
        title: 'Programming Languages',
        description: 'JavaScript, TypeScript, Python, Java, C#',
    },
    {
        icon: <Build fontSize='large' />,
        title: 'Frameworks & Libraries',
        description: 'React, Next.js, Node.js, Spring, Angular',
    },
    {icon: <Computer fontSize='large' />, title: 'Front-end Development', description: 'HTML, CSS, SASS, Tailwind CSS'},
    {icon: <Storage fontSize='large' />, title: 'Data Management', description: 'MongoDB, PostgreSQL, BigQuery'},
    {icon: <Security fontSize='large' />, title: 'DevOps & Security', description: 'Docker, Kubernetes, AWS, CI/CD'},
    {icon: <Language fontSize='large' />, title: 'Other Skills', description: 'Git, Agile Methodologies, TDD, BDD'},
];

export default function SkillsPage() {
    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <BBDevPageHeader
                title={'My Skills'}
                subTitle={["Here are some of the technical skills I've acquired over the years."]}></BBDevPageHeader>
            <Grid container spacing={4}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <BBDevCard title={skill.title} description={skill.description} icon={skill.icon}></BBDevCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
