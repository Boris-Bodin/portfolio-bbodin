'use client';
import React from 'react';
import {Avatar, Box, Container, styled, Typography} from '@mui/material';
import SocialButton from '@/shared/components/SocialButton';
import {useTranslation} from 'react-i18next';
import LanguageChanger from '@/shared/components/LanguageChanger';

const BackgroundContainer = styled(Box)(({theme}) => ({
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    backgroundImage: 'url(/static/images/banner.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
}));

const OverlayContainer = styled(Container)(({theme}) => ({
    padding: '64px 16px 32px',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    overflow: 'auto',
}));

const ProfileSection = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    'h2': {
        textAlign: 'center',
        fontSize: '16px',
    },
}));

const ProfileText = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    color: 'white',
}));

const SocialLinksContainer = styled(Container)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
}));

const ProfileAvatar = styled(Avatar)(({theme}) => ({
    height: 96,
    width: 96,
}));

export default function LinkInBio() {
    const {t} = useTranslation();

    return (
        <BackgroundContainer>
            <Box position="absolute" sx={{top: '0', right: '0', padding: '5px'}}>
                <LanguageChanger />
            </Box>
            <OverlayContainer maxWidth="sm">
                <ProfileSection>
                    <ProfileAvatar alt="Boris Bodin" src="/static/images/avatar.jpg" />
                    <ProfileText>
                        <Typography variant="h3" component="h1">
                            Boris Bodin
                        </Typography>
                        <Typography variant="h4" component="h2">
                            {t('subTitle')}
                        </Typography>
                    </ProfileText>
                </ProfileSection>
                <SocialLinksContainer>
                    <SocialButton media={'PORTFOLIO'} url={'/dashboard/'} />
                    <SocialButton media={'LINKEDIN'} url={'https://www.linkedin.com/in/boris-bodin/'} />
                    <SocialButton media={'MEDIUM'} url={'https://medium.aegis-techno.fr/'} />
                    <SocialButton media={'DZONE'} url={'https://dzone.com/users/5012530/borisbodin.html'} />
                    <SocialButton media={'TWITTER'} url={'https://twitter.com/borisbodin'} />
                    <SocialButton media={'TWITCH'} url={'https://www.twitch.tv/boris_bodin'} />
                    <SocialButton media={'TIKTOK'} url={'https://www.tiktok.com/@boris.bodin'} />
                    <SocialButton media={'INSTAGRAM'} url={'https://www.instagram.com/borisbodin/'} />
                    <SocialButton media={'YOUTUBE'} url={'https://www.youtube.com/channel/UCrGJIKIHNlDKwIPac9UML6g'} />
                </SocialLinksContainer>
            </OverlayContainer>
        </BackgroundContainer>
    );
}
