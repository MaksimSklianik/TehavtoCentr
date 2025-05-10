import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
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
                        <ScrollLink
                            to=""
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
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
                        </ScrollLink>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Hero;