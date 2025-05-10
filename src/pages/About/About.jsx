import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StatCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.primary.light
    }
}));

const About = () => {
    const theme = useTheme();
    const stats = [
        { value: '59', label: 'Сотрудников', emoji: '👨‍🔧' },
        { value: '176M', label: 'Выручка 2023', emoji: '💰' },
        { value: '15.9%', label: 'Рентабельность', emoji: '📈' },
        { value: '153.7%', label: 'Рост выручки', emoji: '🚀' }
    ];

    const history = [
        { year: '2010', event: 'Основание компании' },
        { year: '2014', event: 'Открытие второго филиала' },
        { year: '2018', event: 'Сертификация по международным стандартам' },
        { year: '2023', event: 'Запуск мобильного приложения' }
    ];

    const certificates = ['ISO 9001', 'Официальный дилер', 'Экологический стандарт'];

    return (
        <Box component="section" id="about" sx={{
            py: 8,
            background: theme.palette.background.default,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}>
            <Container maxWidth="lg" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}>
                {/* Заголовок секции */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%' }}
                >
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{
                        fontWeight: 700,
                        mb: 6,
                        color: theme.palette.primary.dark,
                        width: '100%'
                    }}>
                        О компании
                    </Typography>
                </motion.div>

                {/* Основной контент */}
                <Grid container spacing={6} justifyContent="center" sx={{ width: '100%' }}>
                    {/* Левая колонка - описание и статистика */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ width: '100%', maxWidth: '600px' }}
                        >
                            <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: '1.1rem', textAlign: 'center' }}>
                                <Box component="span" sx={{ fontSize: '1.3rem', mr: 1 }}>🏢</Box>
                                ООО «Техавтоцентр» - ведущий автосервис с 10-летним опытом.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
                                <Box component="span" sx={{ fontSize: '1.3rem', mr: 1 }}>🔧</Box>
                                Наш сервисный центр оснащен современным диагностическим оборудованием.
                            </Typography>

                            {/* Блок статистики */}
                            <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                                {stats.map((stat, index) => (
                                    <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                            style={{ width: '100%', maxWidth: '250px' }}
                                        >
                                            <StatCard elevation={3}>
                                                <Typography variant="h4" component="div" sx={{
                                                    fontWeight: 700,
                                                    mb: 1,
                                                    color: theme.palette.primary.main
                                                }}>
                                                    {stat.value}
                                                </Typography>
                                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Box component="span" sx={{ mr: 1, fontSize: '1.2rem' }}>{stat.emoji}</Box>
                                                    {stat.label}
                                                </Typography>
                                            </StatCard>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    </Grid>

                    {/* Правая колонка - миссия и сертификаты */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {/* Блок миссии */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                style={{ width: '100%' }}
                            >
                                <Paper sx={{
                                    p: 4,
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                    color: theme.palette.primary.contrastText,
                                    borderRadius: theme.shape.borderRadius,
                                    textAlign: 'center'
                                }}>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                                        Наша миссия
                                    </Typography>
                                    <Typography paragraph sx={{ textAlign: 'center' }}>
                                        Обеспечивать клиентам профессиональный сервис.
                                    </Typography>
                                    <Typography variant="h5" sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
                                        Наши ценности:
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& li': {
                                            mb: 1,
                                            textAlign: 'center',
                                            listStyleType: 'none'
                                        }
                                    }}>
                                        <Box component="ul" sx={{ pl: 0 }}>
                                            <li><Typography>Качество работ</Typography></li>
                                            <li><Typography>Прозрачность</Typography></li>
                                            <li><Typography>Клиентоориентированность</Typography></li>
                                        </Box>
                                    </Box>
                                </Paper>
                            </motion.div>

                            {/* Блок сертификатов - упрощённый стиль */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                style={{ width: '100%' }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                                        Наши сертификаты
                                    </Typography>
                                    <Grid container spacing={2} justifyContent="center">
                                        {certificates.map((cert, i) => (
                                            <Grid item xs={12} sm={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Typography
                                                    sx={{
                                                        p: 2,
                                                        width: '100%',
                                                        textAlign: 'center',
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    {cert}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>

                {/* Блок истории компании - теперь горизонтальный */}
                <Box sx={{
                    mt: 8,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{ width: '100%' }}
                    >
                        <Typography variant="h4" align="center" gutterBottom sx={{
                            mb: 4,
                            fontWeight: 700
                        }}>
                            История компании
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {history.map((item, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        style={{ height: '100%' }}
                                    >
                                        <Paper sx={{
                                            p: 3,
                                            height: '100%',
                                            textAlign: 'center',
                                            borderRadius: theme.shape.borderRadius,
                                            background: theme.palette.grey[100]
                                        }}>
                                            <Typography variant="h5" color="primary" sx={{
                                                fontWeight: 600,
                                                mb: 2
                                            }}>
                                                {item.year}
                                            </Typography>
                                            <Typography variant="body1">
                                                {item.event}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
};

export default About;