'use client';
import {experimental_extendTheme} from '@mui/material';

const theme = experimental_extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#0D47A1',
                    contrastText: '#FFFFFF',
                },
                secondary: {
                    main: '#FF5722',
                    contrastText: '#FFFFFF',
                },
                background: {
                    default: '#F5F5F5',
                    paper: '#FFFFFF',
                },
                text: {
                    primary: '#212121',
                    secondary: '#757575',
                },
            },
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontSize: '1.5rem',
            lineHeight: '2.0rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1rem',
            lineHeight: '1.25rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1rem',
            lineHeight: '1rem',
            fontWeight: 400,
        },
        h6: {
            fontSize: '0.875rem',
            lineHeight: '1rem',
            fontWeight: 400,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: '1rem',
            fontWeight: 300,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: '0.875rem',
            fontWeight: 300,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
