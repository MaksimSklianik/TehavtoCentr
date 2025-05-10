import { useState } from 'react';
import { Box, Typography, Button, Container, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import ContactForm from '../ContactForm/ContactForm'; // Убедитесь, что путь правильный

const Hero = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Функция, которая будет вызвана после успешной отправки формы
    const handleFormSubmitSuccess = () => {
        setTimeout(() => {
            handleClose();
        }, 2000); // Закрытие через 2 секунды
    };

    return (
        <Box
            component="section"
            sx={{
                background: 'linear-gradient(rgba(25, 118, 210, 0.9), rgba(38, 50, 56, 0.9))',
                color: 'white',
                py: 10,
                textAlign: 'center',
                position: 'relative'
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' }, mb: 3 }}
                    >
                        Профессиональный автосервис
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.3rem' } }}
                    >
                        Техническое обслуживание и ремонт автомобилей любой марки,<br />
                        продажа комплектующих и аксессуаров от мировых производителей
                    </Typography>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={handleOpen}
                            sx={{
                                py: 1.5,
                                px: 4,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: '50px',
                                boxShadow: 3,
                                '&:hover': {
                                    transform: 'translateY(-3px)',
                                    boxShadow: 6
                                }
                            }}
                        >
                            Записаться на сервис
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Прозрачное модальное окно с формой */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto',
                    backgroundColor: 'rgba(0,0,0,0.5)' // Полупрозрачный фон
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        bgcolor: 'transparent', // Прозрачный фон контейнера
                        boxShadow: 'none', // Убираем тень
                        p: 0, // Убираем padding
                        outline: 'none',
                        my: 4
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {/* Передаем колбэк для обработки успешной отправки формы */}
                        <ContactForm onSuccess={handleFormSubmitSuccess} />
                    </Box>
                </Container>
            </Modal>
        </Box>
    );
};

export default Hero;