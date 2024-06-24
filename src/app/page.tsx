import React from 'react';
import {Avatar, Box, Container} from '@mui/material';
import SocialButton from '../design-system/components/social-button/SocialButton';

export default function Page() {
    return (
        <Box sx={{backgroundColor: 'black', height: '100%', width: '100%'}}>
            <Container maxWidth='sm' sx={{padding: '64px 16px 32px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                        <Avatar alt='Boris Bodin' src='/images/avatar.jpg' sx={{height: 96, width: 96}} />
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px'}}>
                            <h1 className={'text-ellipsis text-lg font-[700] leading-[1.5] text-white'}>Boris Bodin</h1>
                            <h2 className={'text-center text-[16px] font-[500] leading-[1.5] text-white'}>
                                A jack-of-all-trades, computer development, cooking, music, video, writing, sketching, video
                                games, you name it!
                            </h2>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                        <SocialButton media={'PORTFOLIO'} url={'/dashboard/'} />
                        <SocialButton media={'LINKEDIN'} url={'https://www.linkedin.com/in/boris-bodin/'} />
                        <SocialButton media={'TWITTER'} url={'https://twitter.com/borisbodin'} />
                        <SocialButton media={'INSTAGRAM'} url={'https://www.instagram.com/borisbodin/'} />
                        <SocialButton media={'YOU_TUBE'} url={'https://www.youtube.com/channel/UCrGJIKIHNlDKwIPac9UML6g'} />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
