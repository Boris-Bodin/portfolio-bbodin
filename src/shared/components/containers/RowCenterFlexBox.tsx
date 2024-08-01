'use client';
import {styled} from '@mui/material';
import CenterFlexBox from '@/shared/components/containers/CenterFlexBox';

const RowCenterFlexBox = styled(CenterFlexBox)(({theme}) => ({
    flexDirection: 'row',
}));

export default RowCenterFlexBox;
