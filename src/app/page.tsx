'use client';
import React from 'react';
import {Avatar, Box, Container, styled, Typography} from '@mui/material';
import SocialButton from '@/shared/components/social-button/SocialButton';

const SocialPageContainer = styled(Box)(({theme}) => ({
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    backgroundImage: 'url(/images/banner.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
}));

const SocialPagePanel = styled(Container)(({theme}) => ({
    padding: '64px 16px 32px',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    overflow: 'auto',
}));

const ProfilSection = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
}));

const ProfilTextSection = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    color: 'white',
}));

const ProfilDescription = styled(Typography)(({theme}) => ({
    textAlign: 'center',
    fontSize: '16px',
}));

const SocialGroupPanel = styled(Container)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
}));

export default function Page() {
    return (
        <SocialPageContainer>
            <SocialPagePanel maxWidth='sm'>
                <ProfilSection>
                    <Avatar alt='Boris Bodin' src='/images/avatar.jpg' sx={{height: 96, width: 96}} />
                    <ProfilTextSection>
                        <Typography variant='h3' component='h1'>
                            Boris Bodin
                        </Typography>
                        <ProfilDescription variant='h4' component='h2'>
                            A jack-of-all-trades, computer development, cooking, music, video, writing, sketching, video games,
                            you name it!
                        </ProfilDescription>
                    </ProfilTextSection>
                </ProfilSection>
                <SocialGroupPanel>
                    <SocialButton media={'PORTFOLIO'} url={'/dashboard/'} />
                    <SocialButton media={'LINKEDIN'} url={'https://www.linkedin.com/in/boris-bodin/'} />
                    <SocialButton media={'MEDIUM'} url={'https://medium.aegis-techno.fr/'} />
                    <SocialButton media={'DZONE'} url={'https://dzone.com/users/5012530/borisbodin.html'} />
                    <SocialButton media={'TWITTER'} url={'https://twitter.com/borisbodin'} />
                    <SocialButton media={'TWITCH'} url={'https://www.twitch.tv/boris_bodin'} />
                    <SocialButton media={'TIKTOK'} url={'https://www.tiktok.com/@boris.bodin'} />
                    <SocialButton media={'INSTAGRAM'} url={'https://www.instagram.com/borisbodin/'} />
                    <SocialButton media={'YOU_TUBE'} url={'https://www.youtube.com/channel/UCrGJIKIHNlDKwIPac9UML6g'} />
                </SocialGroupPanel>
            </SocialPagePanel>
        </SocialPageContainer>
    );
}
