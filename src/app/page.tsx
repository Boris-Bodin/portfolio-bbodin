import React from 'react';
import {Avatar, Box, Container, Typography} from '@mui/material';
import SocialButton from '@/shared/components/social-button/SocialButton';
import styles from '@/styles/components/SocialPage.module.scss';

export default function Page() {
    return (
        <Box className={styles['container']}>
            <Container maxWidth='sm' className={styles['panel']}>
                <Box className={styles['profil']}>
                    <Avatar alt='Boris Bodin' src='/images/avatar.jpg' sx={{height: 96, width: 96}} />
                    <Box className={styles['profil-text']}>
                        <Typography variant='h3' component='h1' className={styles['profil-title']}>
                            Boris Bodin
                        </Typography>
                        <Typography variant='h4' component='h2' className={styles['profil-description']}>
                            A jack-of-all-trades, computer development, cooking, music, video, writing, sketching, video games,
                            you name it!
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles['social-groups']}>
                    <SocialButton media={'PORTFOLIO'} url={'/dashboard/'} />
                    <SocialButton media={'LINKEDIN'} url={'https://www.linkedin.com/in/boris-bodin/'} />
                    <SocialButton media={'MEDIUM'} url={'https://medium.aegis-techno.fr/'} />
                    <SocialButton media={'DZONE'} url={'https://dzone.com/users/5012530/borisbodin.html'} />
                    <SocialButton media={'TWITTER'} url={'https://twitter.com/borisbodin'} />
                    <SocialButton media={'TWITCH'} url={'https://www.twitch.tv/boris_bodin'} />
                    <SocialButton media={'TIKTOK'} url={'https://www.tiktok.com/@boris.bodin'} />
                    <SocialButton media={'INSTAGRAM'} url={'https://www.instagram.com/borisbodin/'} />
                    <SocialButton media={'YOU_TUBE'} url={'https://www.youtube.com/channel/UCrGJIKIHNlDKwIPac9UML6g'} />
                </Box>
            </Container>
        </Box>
    );
}
