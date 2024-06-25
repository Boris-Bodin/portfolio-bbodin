'use client';
import React from 'react';
import {Box, IconButton} from '@mui/material';

type TextIconButtonParams = {
    icon: React.JSX.Element;
    text: string;
    onClick: () => void;
};

export default function TextIconButton(props: TextIconButtonParams) {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '25px',
                minWidth: '250px',
            }}
            onClick={props.onClick}>
            <IconButton aria-label={props.text}>{props.icon}</IconButton>
            <Box sx={{flex: 'auto', textAlign: 'center'}}>{props.text}</Box>
        </Box>
    );
}
