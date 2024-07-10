'use client';
import {experimental_extendTheme} from '@mui/material';

const theme = experimental_extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#0D47A1', // A deep blue color
                    contrastText: '#FFFFFF', // White text
                },
                secondary: {
                    main: '#FF5722', // A vibrant orange color
                    contrastText: '#FFFFFF', // White text
                },
                background: {
                    default: '#F5F5F5', // A light grey background
                    paper: '#FFFFFF', // White paper background
                },
                text: {
                    primary: '#212121', // Dark grey text
                    secondary: '#757575', // Medium grey text
                },
            },
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontSize: '3rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 400,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 300,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 300,
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '16px',
                    marginBottom: '16px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    'contained.colorPrimary': {
                        color: '#FFFFFF',
                    },
                },
            },
        },
    },
});

export default theme;
