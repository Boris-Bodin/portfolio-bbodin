'use client';
import {styled} from '@mui/material';
import FlexBox from '@/shared/components/containers/FlexBox';

const CenterFlexBox = styled(FlexBox)(({theme}) => ({
    alignItems: 'center',
}));

export default CenterFlexBox;
