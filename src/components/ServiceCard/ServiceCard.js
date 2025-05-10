import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, color }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ height: '100%' }}
        >
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'all 0.3s ease',
                borderTop: `4px solid ${color}`, // Верхний бордюр с заданным цветом
                p: 2,
                '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-5px)'
                }
            }}>
                <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: color, // Цвет иконки совпадает с основным цветом карты
                            mb: 2
                        }}
                    >
                        {icon}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{
                            fontWeight: 700,
                            color: 'primary.dark',
                            mb: 2
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                    >
                        {description}
                    </Typography>
                </CardContent>
                <Box sx={{ width: '100%', p: 2 }}>
                    <Button
                        size="medium"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: color, // Цвет кнопки соответствует основному цвету
                            '&:hover': {
                                backgroundColor: color,
                                opacity: 0.9
                            }
                        }}
                    >
                        Подробнее
                    </Button>
                </Box>
            </Card>
        </motion.div>
    );
};

export default ServiceCard;