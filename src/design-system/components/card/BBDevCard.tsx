'use client';
import React, {MouseEvent} from 'react';
import {Box, Button, Paper, Typography} from '@mui/material';
import styles from './BBDevCard.module.scss';

type BBDevCardParams = {
    title: string;
    description: string;
    image?: string;
    icon?: React.JSX.Element;
    actionTitle?: string;
    action?: (event: MouseEvent<Element>) => void;
};

export default function BBDevCard(props: BBDevCardParams) {
    return (
        <Paper elevation={3} className={styles['card']}>
            {props.image && (
                <Box className={styles['card-image-container']}>
                    <img src={props.image} alt={props.title} className={styles['card-image']} />
                </Box>
            )}
            <Box className={styles['card-content']}>
                {props.icon && <Box className={styles['card-icon-container']}>{props.icon}</Box>}
                <Typography variant='h6' component='h3' className={styles['card-title']}>
                    {props.title}
                </Typography>
                <Typography variant='body2' className={styles['card-description']}>
                    {props.description}
                </Typography>
                {props.action && (
                    <Button variant='contained' color='primary' onClick={props.action} className={styles['card-action']}>
                        {props.actionTitle}
                    </Button>
                )}
            </Box>
        </Paper>
    );
}
