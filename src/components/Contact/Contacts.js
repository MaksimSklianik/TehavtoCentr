import React from 'react';
import { Container, Typography, Box, Grid, useTheme, Button } from '@mui/material';
import { Phone, Email, LocationOn, Schedule } from '@mui/icons-material';
import ContactForm from '../ContactForm/ContactForm';
import { Link as ScrollLink } from 'react-scroll';

const Contacts = () => {
    const theme = useTheme();

    // Координаты центра Москвы
    const mapLocation = {
        lat: 55.751244,
        lng: 37.618423,
        address: "г. Москва, ул. Автомобильная, д. 1"
    };

    // Компонент для контактов
    const ContactItem = ({ icon, title, content }) => (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            mb: 3,
            p: 2,
            borderRadius: 1,
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
                transform: 'translateX(5px)'
            }
        }}>
            <Box sx={{
                mr: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText
            }}>
                {React.cloneElement(icon, { sx: { fontSize: 20 } })}
            </Box>
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>{title}</Typography>
                {Array.isArray(content) ? (
                    content.map((line, i) => (
                        <Typography key={i} variant="body2" sx={{ lineHeight: 1.6 }}>{line}</Typography>
                    ))
                ) : (
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>{content}</Typography>
                )}
            </Box>
        </Box>
    );

    return (
        <Box component="section" id="contact" sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        mb: 6,
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: 80,
                            height: 4,
                            backgroundColor: theme.palette.primary.main,
                            margin: '20px auto 0'
                        }
                    }}
                >
                    Контакты
                </Typography>

                <Grid container spacing={4} alignItems="stretch">
                    {/* Левая колонка - контакты */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: 600,
                                    mb: 4,
                                    color: theme.palette.text.primary
                                }}
                            >
                                Контактная информация
                            </Typography>

                            <ContactItem
                                icon={<LocationOn color="primary" />}
                                title="Адрес"
                                content={mapLocation.address}
                            />
                            <ContactItem
                                icon={<Phone color="primary" />}
                                title="Телефон"
                                content={
                                    <Box component="a" href="tel:+74951234567" sx={{
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: theme.palette.primary.main
                                        }
                                    }}>
                                        +7 (495) 123-45-67
                                    </Box>
                                }
                            />
                            <ContactItem
                                icon={<Email color="primary" />}
                                title="Email"
                                content={
                                    <Box component="a" href="mailto:info@tehavtocentr.ru" sx={{
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: theme.palette.primary.main
                                        }
                                    }}>
                                        info@tehavtocentr.ru
                                    </Box>
                                }
                            />
                            <ContactItem
                                icon={<Schedule color="primary" />}
                                title="Время работы"
                                content={["Пн-Пт: 9:00 - 20:00", "Сб-Вс: 10:00 - 18:00"]}
                            />

                            <Box sx={{ mt: 4 }}>
                                <ScrollLink
                                    to="contact-form"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            fontWeight: 600,
                                            borderRadius: '8px',
                                            bgcolor: 'primary.main',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                                transform: 'translateY(-2px)'
                                            }
                                        }}
                                    >
                                        Записаться на сервис
                                    </Button>
                                </ScrollLink>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Правая колонка - карта Москвы */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            height: '100%',

                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 2,
                            overflow: 'hidden',
                            boxShadow: 3,
                            border: `1px solid ${theme.palette.divider}`,
                            position: 'relative'
                        }}>
                            <iframe
                                src={`https://yandex.ru/map-widget/v1/?ll=${mapLocation.lng},${mapLocation.lat}&z=15&pt=${mapLocation.lng},${mapLocation.lat},comma`}
                                width="100%"
                                height="100%"
                                style={{ minHeight: '400px', border: 'none' }}
                                title="Карта Москвы"
                                allowFullScreen
                            />
                        </Box>
                    </Grid>

                    {/* Форма */}
                    <Grid item xs={12} id="contact-form" sx={{ mt: 8 }}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                mb: 3,
                                color: theme.palette.text.primary
                            }}
                        >
                            Оставьте заявку
                        </Typography>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contacts;