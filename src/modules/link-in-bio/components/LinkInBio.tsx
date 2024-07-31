'use client';
import React from 'react';
import {Avatar, Box, Container, styled, Typography} from '@mui/material';
import SocialButton from '@/shared/components/SocialButton';
import {useTranslation} from 'react-i18next';
import LanguageChanger from '@/shared/components/LanguageChanger';
import FullBox from '@/shared/components/FullBox';
import CenterColBox from '@/shared/components/CenterColBox';

const BackgroundContainer = styled(FullBox)(({theme}) => ({
    backgroundColor: 'black',
    backgroundImage: 'url(/static/images/banner.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
}));

const OverlayContainer = styled(CenterColBox)(({theme}) => ({
    position: 'relative',
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    gap: theme.spacing(3),
    overflow: 'auto',
}));

const ProfileSection = styled(CenterColBox)(({theme}) => ({
    gap: theme.spacing(2),
    'h2': {
        textAlign: 'center',
        fontSize: '16px',
    },
}));

const ProfileText = styled(CenterColBox)(({theme}) => ({
    gap: theme.spacing(1),
    color: 'white',
}));

const SocialLinksContainer = styled(CenterColBox)(({theme}) => ({
    gap: theme.spacing(2),
}));

const ProfileAvatar = styled(Avatar)(({theme}) => ({
    height: 96,
    width: 96,
}));

const LanguageChangerContainer = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '5px',
}));

export default function LinkInBio() {
    const {t} = useTranslation();

    return (
        <BackgroundContainer>
            <Container maxWidth='sm' sx={{height: '100%'}}>
                <OverlayContainer>
                    <LanguageChangerContainer>
                        <LanguageChanger />
                    </LanguageChangerContainer>
                    <ProfileSection>
                        <ProfileAvatar alt='Boris Bodin' src='/static/images/avatar.jpg' />
                        <ProfileText>
                            <Typography variant='h3' component='h1'>
                                Boris Bodin
                            </Typography>
                            <Typography variant='h4' component='h2'>
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
                        <SocialButton media={'YOU_TUBE'} url={'https://www.youtube.com/channel/UCrGJIKIHNlDKwIPac9UML6g'} />
                    </SocialLinksContainer>
                </OverlayContainer>
            </Container>
        </BackgroundContainer>
    );
}
