'use client';
import React, {MouseEvent} from 'react';
import {Container, Grid} from '@mui/material';
import BBDevPageHeader from '../../../../design-system/components/page-header/BBDevPageHeader';
import BBDevCard from '../../../../design-system/components/card/BBDevCard';

type Course = {image?: string; link?: string; description: string; title: string};

const courses: Array<Course> = [
    {
        title: 'Basic CSS concepts (WIP)',
        description: 'Présentation de plusieurs concepts de base du CSS',
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
    const openCourse = (link: string) => {
        return (event: MouseEvent<Element>) => window.open(link, '_blank');
    };

    return (
        <Container maxWidth='lg' sx={{mt: 4, mb: 4}}>
            <BBDevPageHeader
                title={'My Courses'}
                subTitle={["Here are some of the courses I've created or taught."]}></BBDevPageHeader>
            <Grid container spacing={4}>
                {courses.map((course, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        {course.link ? (
                            <BBDevCard
                                title={course.title}
                                description={course.description}
                                image={course.image}
                                actionTitle={'View Course'}
                                action={openCourse(course.link)}></BBDevCard>
                        ) : (
                            <BBDevCard
                                title={course.title}
                                description={course.description}
                                image={course.image}
                                actionTitle={'View Course'}></BBDevCard>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
