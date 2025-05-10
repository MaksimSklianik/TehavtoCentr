import React from 'react';
import { Container, Typography, Box, Grid, useTheme, Button } from '@mui/material';
import { Phone, Email, LocationOn, Schedule } from '@mui/icons-material';
import ContactForm from '../ContactForm/ContactForm';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Contacts = () => {
    const theme = useTheme();

    const mapLocation = {
        lat: 55.751244,
        lng: 37.618423,
        address: "г. Москва, ул. Автомобильная, д. 1"
    };

    const ContactItem = ({ icon, title, content }) => (
        <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                p: 2,
                borderRadius: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
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
                <Box sx={{ textAlign: 'left' }}>
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
        </motion.div>
    );

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: 10,
                backgroundColor: theme.palette.background.default,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 0.77, 0.47, 0.97]
                    }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            color: theme.palette.primary.main,
                            mb: 6,
                            position: 'relative',
                            fontSize: { xs: '2.2rem', md: '3rem' },
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
                </motion.div>

                {/* Основной контейнер для колонок */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Container maxWidth="md" sx={{ mb: 8 }}>
                        <Grid container spacing={4} alignItems="stretch">
                            {/* Левая колонка - контакты */}
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial={{ x: -20 }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Box sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        p: 2
                                    }}>
                                        <Typography
                                            variant="h4"
                                            gutterBottom
                                            sx={{
                                                fontWeight: 700,
                                                mb: 4,
                                                color: theme.palette.text.primary,
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
                                    </Box>
                                </motion.div>
                            </Grid>

                            {/* Правая колонка - карта Москвы */}
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial={{ x: 20 }}
                                    whileInView={{ x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Box sx={{
                                        height: '100%',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: 3,
                                        border: `1px solid ${theme.palette.divider}`,
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
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Container>
                </motion.div>

                {/* Форма */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2
                    }}
                >
                    <Container maxWidth="md" id="contact-form" sx={{ mt: 8 }}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            align="center"
                            sx={{
                                fontWeight: 700,
                                mb: 4,
                                color: theme.palette.primary.main
                            }}
                        >
                            Оставьте заявку
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ContactForm />
                        </Box>
                    </Container>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Contacts;