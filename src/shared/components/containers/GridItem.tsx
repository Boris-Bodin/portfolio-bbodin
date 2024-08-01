'use client';
import {styled} from '@mui/material';
import GridContainer from '@/shared/components/containers/GridContainer';

const GridItem = styled(GridContainer)(({theme}) => ({
    '&>*': {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        '&>*': {
            flex: 'auto',
        },
    },
}));

export default GridItem;
