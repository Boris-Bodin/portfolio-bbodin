'use client';
import {CircularProgress, styled} from '@mui/material';
import CenterColBox from '@/shared/components/CenterColBox';

const SpinnerContainer = styled(CenterColBox)(({theme}) => ({
    minHeight: '60vh',
    justifyContent: 'center',
}));

export default function Spinner() {
    return (
        <SpinnerContainer>
            <CircularProgress />
        </SpinnerContainer>
    );
}
