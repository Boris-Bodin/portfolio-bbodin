'use client';
import React, {MouseEvent} from 'react';
import {Box, Button, Paper, styled, Typography} from '@mui/material';

type BBDevCardParams = {
    title: string;
    description: string;
    image?: string;
    icon?: React.JSX.Element;
    actionTitle?: string;
    action?: (event: MouseEvent<Element>) => void;
};

const Card = styled(Paper)(({theme}) => ({
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const CardImageContainer = styled(Box)(({theme}) => ({
    maxHeight: '200px',
    overflow: 'hidden',
}));

const CardImage = styled(Box)(({theme}) => ({
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const CardContent = styled(Box)(({theme}) => ({
    // padding: '1rem',
    padding: theme.spacing(5),
    textAlign: 'center',
}));

const CardIconContent = styled(Box)(({theme}) => ({
    color: theme.palette.primary.main,
}));

const CardTitle = styled(Typography)(({theme}) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
}));

const CardDescription = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
}));

const CardAction = styled(Button)(({theme}) => ({
    marginTop: theme.spacing(2),
}));

export default function BBDevCard(props: BBDevCardParams) {
    return (
        <Card elevation={3}>
            {props.image && (
                <CardImageContainer>
                    <CardImage>
                        <img src={props.image} alt={props.title} width='100%' height='auto' />
                    </CardImage>
                </CardImageContainer>
            )}
            <CardContent>
                {props.icon && <CardIconContent>{props.icon}</CardIconContent>}
                <CardTitle variant='h4'>{props.title}</CardTitle>
                <CardDescription variant='body2'>{props.description}</CardDescription>
                {props.action && (
                    <CardAction variant='contained' color='primary' onClick={props.action}>
                        {props.actionTitle}
                    </CardAction>
                )}
            </CardContent>
        </Card>
    );
}
