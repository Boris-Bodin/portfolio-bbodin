'use client';
import React, {MouseEvent} from 'react';
import {Container, Grid} from '@mui/material';
import BBDevPageHeader from '../../../design-system/components/page-header/BBDevPageHeader';
import BBDevCard from '../../../design-system/components/card/BBDevCard';
import {Project} from '@/modules/projects/types/Project';

const projects: Array<Project> = [
    {
        title: 'WIP',
        description: 'WIP',
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

export default function Projects() {
    const openProject = (link: string) => {
        return (event: MouseEvent<Element>) => window.open(link, '_blank');
    };

    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <BBDevPageHeader title={'My Projects'} subTitle={["Here are some of the projects I've worked on."]}></BBDevPageHeader>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        {project.link ? (
                            <BBDevCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                actionTitle={'View Course'}
                                action={openProject(project.link)}></BBDevCard>
                        ) : (
                            <BBDevCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                actionTitle={'View Course'}></BBDevCard>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
