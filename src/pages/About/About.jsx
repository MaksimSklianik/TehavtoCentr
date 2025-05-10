import { Container, Grid, Typography, Box, Paper, Fade, Grow } from '@mui/material';
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

    return (
        <Box component="section" id="about" sx={{
            py: 8,
            background: theme.palette.background.default
        }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h3" component="h2" align="center" gutterBottom sx={{
                        fontWeight: 700,
                        mb: 6,
                        color: theme.palette.primary.dark
                    }}>
                        О компании
                    </Typography>
                </motion.div>

                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                                <Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>🏢</Box>
                                ООО «Техавтоцентр» является юридическим лицом с ограниченной ответственностью и владеет предприятием по обслуживанию автомобилей.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>🔧</Box>
                                Мы выполняем широкий спектр операций, включая те, которые недоступны для многих других сервисных станций.
                                Наши специалисты проводят комплексную компьютерную диагностику и выполняют сложные задачи,
                                требующие высококвалифицированных техников.
                            </Typography>
                        </motion.div>

                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            {stats.map((stat, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
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
                                                <Box component="span" sx={{ mr: 1 }}>{stat.emoji}</Box>
                                                {stat.label}
                                            </Typography>
                                        </StatCard>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Box

                            />
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;