'use client';
import {CircularProgress, styled} from '@mui/material';
import ColCenterFlexBox from '@/shared/components/containers/CenterColFlexBox';

const SpinnerContainer = styled(ColCenterFlexBox)(({theme}) => ({
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
