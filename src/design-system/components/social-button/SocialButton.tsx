'use client';
import React from 'react';
import {Box, IconButton} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import MediumIcon from '@mui/icons-material/Medium';
// import DzoneIcon from '@mui/icons-material/Dzone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import TwitchIcon from '@mui/icons-material/Twitch';
// import TiktokIcon from '@mui/icons-material/Tiktok';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

type SocialMediaType =
    // 'TWITCH' |
    | 'INSTAGRAM'
    // 'MEDIUM' |
    | 'LINKEDIN'
    // 'TIKTOK' |
    | 'YOU_TUBE'
    // 'DZONE' |
    | 'PORTFOLIO'
    | 'TWITTER';

const SocialMedia: {[key: string]: {name: string; icon: React.JSX.Element}} = {
    PORTFOLIO: {
        name: 'Portfolio',
        icon: <DashboardIcon />,
    },
    // MEDIUM: {
    //     name: 'Medium',
    //     icon: <MediumIcon />,
    // },
    // DZONE: {
    //     name: 'Dzone',
    //     icon: <DzoneIcon />,
    // },
    LINKEDIN: {
        name: 'LinkedIn',
        icon: <LinkedInIcon />,
    },
    TWITTER: {
        name: 'Twitter',
        icon: <TwitterIcon />,
    },
    // TWITCH: {
    //     name: 'Twitch',
    //     icon: <TwitchIcon />,
    // },
    // TIKTOK: {
    //     name: 'Tiktok',
    //     icon: <TiktokIcon />,
    // },
    INSTAGRAM: {
        name: 'Instagram',
        icon: <InstagramIcon />,
    },
    YOU_TUBE: {
        name: 'YouTube',
        icon: <YouTubeIcon />,
    },
};

export default function SocialButton(props: {media: SocialMediaType; url: string}) {
    const mediaElement = SocialMedia[props.media];

    if (mediaElement === undefined) {
        return null;
    }

    const mediaIcon = mediaElement.icon;
    const mediaName = mediaElement.name;

    const open = () => {
        window.open(props.url, '_blank');
    };

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '25px',
                minWidth: '250px',
            }}
            onClick={open}>
            <IconButton color='primary' aria-label={mediaName}>
                {mediaIcon}
            </IconButton>
            <Box sx={{flex: 'auto', textAlign: 'center'}}>{mediaName}</Box>
        </Box>
    );
}
