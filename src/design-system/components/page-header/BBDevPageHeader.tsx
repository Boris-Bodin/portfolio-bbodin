'use client';
import React from 'react';
import {Box, styled, Typography} from '@mui/material';

type BBDevPageHeaderParams = {
    children?: React.ReactNode;
    title: string;
    subTitle: Array<string>;
};

const PageHeaderWrapper = styled(Box)(({theme}) => ({
    textAlign: 'center',
    marginBottom: '2rem',
    color: theme.palette.primary.main,
}));

const Title = styled(Typography)(({theme}) => ({
    textAlign: 'center',
    marginBottom: '2rem',
    color: theme.palette.primary.main,
}));

const SubTitle = styled(Typography)(({theme}) => ({
    textAlign: 'center',
    marginBottom: '4rem',
    color: theme.palette.text.primary,
}));

export default function BBDevPageHeader(props: BBDevPageHeaderParams) {
    return (
        <PageHeaderWrapper>
            <Title variant='h2' gutterBottom>
                {props.title}
            </Title>
            <SubTitle variant='body1' paragraph>
                {props.subTitle.map((subTitle, index) => (
                    <span key={index}>
                        {index > 0 && <br />}
                        {subTitle}
                    </span>
                ))}
            </SubTitle>
        </PageHeaderWrapper>
    );
}
