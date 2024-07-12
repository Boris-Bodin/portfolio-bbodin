'use client';
import React from 'react';
import {Button, Typography} from '@mui/material';

type BBDevButtonParams = {
    icon: React.JSX.Element;
    text: string;
    onClick: () => void;
};

const style = {
    borderRadius: '25px',
    padding: '12px 16px',
    minWidth: '250px',
};

export default function BBDevButton(props: BBDevButtonParams) {
    const onClick = () => {
        setTimeout(() => {
            props.onClick();
        }, 500);
    };

    return (
        <Button sx={style} color={'primary'} variant={'contained'} onClick={onClick} startIcon={props.icon}>
            <Typography sx={{flex: 'auto'}} align={'center'}>
                {props.text}
            </Typography>
        </Button>
    );
}
