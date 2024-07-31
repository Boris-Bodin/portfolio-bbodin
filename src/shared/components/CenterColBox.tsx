'use client';
import {Box, styled} from '@mui/material';

const CenterColBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export default CenterColBox;
