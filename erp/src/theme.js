import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue
        },
        secondary: {
            main: '#f50057', // Pink
        },
        background: {
            default: '#f4f6f8', // Light background for better contrast
            paper: '#ffffff',  // White paper background for cards and sections
        },
        text: {
            primary: '#333333', // Dark text for readability
            secondary: '#757575', // Light grey text for secondary content
        },
    },
    typography: {
        h4: {
            fontWeight: 600,
            fontSize: '1.75rem',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '0.875rem',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadows
                    borderRadius: '8px', // Rounded corners
                },
            },
        },
    },
});

export default theme;
