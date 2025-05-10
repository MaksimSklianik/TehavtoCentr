import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
    background: 'linear-gradient(45deg, #1976d2 0%, #263238 100%)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
});

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    margin: theme.spacing(0, 1),
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 0,
        height: '2px',
        backgroundColor: theme.palette.secondary.main,
        transition: 'width 0.3s ease'
    },
    '&:hover': {
        color: theme.palette.secondary.main,
        '&:after': {
            width: '100%'
        }
    }
}));

const Header = () => {
    return (
        <StyledAppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Обернули логотип в RouterLink для перехода на главную */
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Box component="span" sx={{ mr: 1 }}>🚗</Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            ТА ООО «Техавтоцентр»
                        </Typography>

                    </Box>
                    }
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NavButton component={RouterLink} to="/services">Услуги</NavButton>
                        <NavButton component={RouterLink} to="/about">О компании</NavButton>
                        <NavButton component={RouterLink} to="/contact">Контакты</NavButton>
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Header;