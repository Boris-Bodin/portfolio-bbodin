'use client';
import React from 'react';
import {Box, IconButton} from '@mui/material';

type TextIconButtonParams = {
    icon: React.JSX.Element;
    text: string;
    onClick: () => void;
};

const style = {
    backgroundColor: 'white',
    cursor: 'pointer',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px',
    minWidth: '250px',
};

export default function TextIconButton(props: TextIconButtonParams) {
    return (
        <Box sx={style} onClick={props.onClick}>
            <IconButton aria-label={props.text}>{props.icon}</IconButton>
            <Box sx={{flex: 'auto', textAlign: 'center'}}>{props.text}</Box>
        </Box>
    );
}
