'use client';
import {styled} from '@mui/material';
import CenterFlexBox from '@/shared/components/containers/CenterFlexBox';

const ColCenterFlexBox = styled(CenterFlexBox)(({theme}) => ({
    flexDirection: 'column',
}));

export default ColCenterFlexBox;
