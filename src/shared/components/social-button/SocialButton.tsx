'use client';
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BBDevButton from '../../../design-system/components/social-button/BBDevButton';

type SocialMediaType = 'TWITCH' | 'INSTAGRAM' | 'MEDIUM' | 'LINKEDIN' | 'TIKTOK' | 'YOU_TUBE' | 'DZONE' | 'PORTFOLIO' | 'TWITTER';

const SocialMedia: {[key: string]: {name: string; icon: React.JSX.Element}} = {
    PORTFOLIO: {
        name: 'Portfolio',
        icon: <DashboardIcon />,
    },
    MEDIUM: {
        name: 'Medium',
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'>
                <path
                    fill='currentColor'
                    d='M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795c-.438 0-.793-1.7-.793-3.795c0-2.096.355-3.795.794-3.795c.438 0 .793 1.699.793 3.795'></path>
            </svg>
        ),
    },
    DZONE: {
        name: 'Dzone',
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                <path
                    fill='currentColor'
                    d='m6.8 21l-5.2-9l5.2-9h10.4l5.2 9l-5.2 9zm1.15-2h8.1l4.025-7l-4.025-7h-8.1L3.9 12zM12 12'></path>
            </svg>
        ),
    },
    LINKEDIN: {
        name: 'LinkedIn',
        icon: <LinkedInIcon />,
    },
    TWITTER: {
        name: 'Twitter',
        icon: <TwitterIcon />,
    },
    TWITCH: {
        name: 'Twitch',
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                <path
                    fill='currentColor'
                    d='M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z'></path>
            </svg>
        ),
    },
    TIKTOK: {
        name: 'Tiktok',
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                <path
                    fill='currentColor'
                    d='M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48'></path>
            </svg>
        ),
    },
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

    const open = () => {
        window.open(props.url, '_blank');
    };

    return <BBDevButton icon={mediaElement.icon} text={mediaElement.name} onClick={open} />;
}
