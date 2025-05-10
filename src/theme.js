import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d1b2a',
            dark: '#1b263b',
            light: '#415a77'
        },
        secondary: {
            main: '#778da9',
            dark: '#4a4e69',
            light: '#e0e1dd'
        },
        error: {
            main: '#ba181b'
        },
        warning: {
            main: '#e9c46a'
        },
        success: {
            main: '#121715'
        },
        background: {
            default: '#e0e1dd',
            paper: '#ffffff'
        },
        text: {
            primary: '#0d1b2a',
            secondary: '#1b263b'
        }
    },
    typography: {
        fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: '3rem',
            letterSpacing: '-0.5px'
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.2rem',
            letterSpacing: '-0.3px'
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.8rem'
        },
        button: {
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: '0.5px'
        },
        body1: {
            lineHeight: 1.6
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    padding: '10px 24px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 'none',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }
                },
                contained: {
                    border: '2px solid transparent',
                    '&:hover': {
                        borderColor: 'currentColor'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }
            }
        },
        // Новые стили для анимированных секций
        MuiContainer: {
            styleOverrides: {
                root: {
                    '&.services-section': {
                        '& .section-title': {
                            animation: '$fadeInUp 0.6s ease-out'
                        },
                        '& .service-card': {
                            animation: '$fadeIn 0.5s ease-out',
                            animationFillMode: 'both',
                            '&:nth-of-type(1)': { animationDelay: '0.2s' },
                            '&:nth-of-type(2)': { animationDelay: '0.3s' },
                            '&:nth-of-type(3)': { animationDelay: '0.4s' },
                            '&:nth-of-type(4)': { animationDelay: '0.5s' }
                        }
                    },
                    '&.contacts-section': {
                        '& .section-title': {
                            animation: '$fadeInUp 0.6s ease-out'
                        },
                        '& .contact-form': {
                            animation: '$fadeInUp 0.6s ease-out 0.2s',
                            animationFillMode: 'both'
                        },
                        '& .contact-info': {
                            animation: '$fadeInUp 0.6s ease-out 0.4s',
                            animationFillMode: 'both'
                        }
                    }
                }
            }
        }
    },
    shape: {
        borderRadius: 8
    },
    // Добавляем ключевые кадры для анимаций
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@keyframes fadeIn': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                },
                '@keyframes fadeInUp': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                }
            }
        }
    }
});

export default theme;