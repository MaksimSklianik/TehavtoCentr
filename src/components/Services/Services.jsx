import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ServiceCard from '../ServiceCard/ServiceCard';

const services = [
    {
        title: "Сервисное обслуживание",
        description: "Профессиональное техническое обслуживание легковых автомобилей, микроавтобусов и грузовиков среднего размера",
        icon: "🔧",
        color: "#1976d2"
    },
    {
        title: "Продажа комплектующих",
        description: "Квалифицированный выбор и продажа различных комплектующих, расходных материалов, смазочных материалов",
        icon: "🛒",
        color: "#ff5722"
    },
    {
        title: "Диагностика",
        description: "Компьютерная диагностика всех систем автомобиля с использованием профессионального оборудования",
        icon: "💻",
        color: "#4caf50"
    },
    {
        title: "Шиномонтаж",
        description: "Полный комплекс услуг по шиномонтажу, балансировке и хранению колес",
        icon: "🔄",
        color: "#9c27b0"
    }
];

const Services = () => {
    return (
        <Box component="section" id="services" sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            mb: 6,
                            color: 'primary.dark'
                        }}
                    >
                        Наши услуги
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        align="center"
                        sx={{
                            mb: 6,
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        ООО «Техавтоцентр» предлагает полный спектр услуг по обслуживанию и ремонту автомобилей
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;