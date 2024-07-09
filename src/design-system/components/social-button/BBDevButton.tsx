'use client';
import React from 'react';
import {Box, Button} from '@mui/material';

type TextIconButtonParams = {
    icon: React.JSX.Element;
    text: string;
    onClick: () => void;
};

const style = {
    borderRadius: '25px',
    padding: '12px 16px',
    minWidth: '250px',
};

export default function BBDevButton(props: TextIconButtonParams) {
    const onClick = () => {
        setTimeout(() => {
            props.onClick();
        }, 500);
    };

    return (
        <Button sx={style} color={'primary'} variant={'contained'} onClick={onClick} startIcon={props.icon}>
            <Box sx={{flex: 'auto', textAlign: 'center'}}>{props.text}</Box>
        </Button>
    );
}
