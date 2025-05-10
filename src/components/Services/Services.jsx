import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ServiceCard from '../ServiceCard/ServiceCard';

const services = [
    {
        title: "Сервисное обслуживание",
        description: "Профессиональное техническое обслуживание легковых автомобилей, микроавтобусов и грузовиков среднего размера",
        icon: "🔧",
        color: "#2e2a2a"
    },
    {
        title: "Продажа комплектующих",
        description: "Квалифицированный выбор и продажа различных комплектующих, расходных материалов, смазочных материалов",
        icon: "🛒",
        color: "#2e2a2a"
    },
    {
        title: "Диагностика",
        description: "Компьютерная диагностика всех систем автомобиля с использованием профессионального оборудования",
        icon: "💻",
        color: "#2e2a2a"
    },
    {
        title: "Шиномонтаж",
        description: "Полный комплекс услуг по шиномонтажу, балансировке и хранению колес",
        icon: "🔄",
        color: "#2e2a2a"
    }
];

const Services = () => {
    return (
        <Box
            component="section"
            id="services"
            sx={{
                py: 10,
                bgcolor: 'background.default',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                {/* Анимированный заголовок */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 0.77, 0.47, 0.97]
                    }}
                    style={{ textAlign: 'center' }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            mb: 3,
                            color: 'primary.main',
                            fontSize: { xs: '2.2rem', md: '3rem' }
                        }}
                    >
                        Наши услуги
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            mb: 6,
                            maxWidth: '800px',
                            mx: 'auto',
                            color: 'text.secondary'
                        }}
                    >
                        ООО «Техавтоцентр» предлагает полный спектр услуг по обслуживанию и ремонту автомобилей
                    </Typography>
                </motion.div>

                {/* Анимированные карточки услуг */}
                <Grid
                    container
                    spacing={{ xs: 3, md: 4 }}
                    justifyContent="center"
                    sx={{ position: 'relative' }}
                >
                    {services.map((service, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            sx={{
                                display: 'flex',
                                position: 'relative'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: [0.34, 0.63, 0, 0.99]
                                }}
                                style={{
                                    width: '100%',
                                    willChange: 'transform'
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <ServiceCard
                                    {...service}
                                    sx={{
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: 6
                                        }
                                    }}
                                />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;