import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Phone, Email, LocationOn, Schedule } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            ООО «Техавтоцентр»
                        </Typography>
                        <Typography variant="body2">
                            Профессиональный автосервис с многолетним опытом работы на рынке автомобильных услуг.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Контакты
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOn sx={{ mr: 1 }} />
                            <Typography>г. Москва, ул. Автомобильная, д. 1</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography>+7 (495) 123-45-67</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Email sx={{ mr: 1 }} />
                            <Typography>info@tehavtocentr.ru</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Время работы
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Schedule sx={{ mr: 1 }} />
                            <Typography>Пн-Пт: 9:00 - 20:00</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Schedule sx={{ mr: 1 }} />
                            <Typography>Сб-Вс: 10:00 - 18:00</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3 }}>
                    <Typography variant="body2" align="center">
                        © {new Date().getFullYear()} ООО «Техавтоцентр». Все права защищены.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;