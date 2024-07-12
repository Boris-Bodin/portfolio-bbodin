'use client';
import React from 'react';
import {Box, Typography} from '@mui/material';
import styles from './BBDevPageHeader.module.scss';

type BBDevPageHeaderParams = {
    children?: React.ReactNode;
    title: string;
    subTitle: Array<string>;
};

export default function BBDevPageHeader(props: BBDevPageHeaderParams) {
    return (
        <Box className={styles['page-header']}>
            <Typography variant='h3' component='h1' gutterBottom>
                {props.title}
            </Typography>
            <Typography variant='body1' paragraph>
                {props.subTitle.map((subTitle, index) => (
                    <span key={index}>
                        {index > 0 && <br />}
                        {subTitle}
                    </span>
                ))}
            </Typography>
        </Box>
    );
}
