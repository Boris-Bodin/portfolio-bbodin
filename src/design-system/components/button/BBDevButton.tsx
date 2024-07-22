'use client';
import React from 'react';
import {Button, styled, Typography} from '@mui/material';

type BBDevButtonParams = {
    icon: React.JSX.Element;
    text: string;
    onClick: () => void;
};

const StyledButton = styled(Button)(({theme}) => ({
    borderRadius: '25px',
    padding: '12px 16px',
    minWidth: '250px',
}));

const StyledText = styled(Typography)(({theme}) => ({
    flex: 'auto',
}));

export default function BBDevButton(props: BBDevButtonParams) {
    const onClick = () => {
        setTimeout(() => {
            props.onClick();
        }, 500);
    };

    return (
        <StyledButton color={'primary'} variant={'contained'} onClick={onClick} startIcon={props.icon}>
            <StyledText align={'center'}>{props.text}</StyledText>
        </StyledButton>
    );
}
