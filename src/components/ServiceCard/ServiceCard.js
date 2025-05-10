import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, color }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'all 0.3s ease',
                borderTop: `4px solid ${color}`,
                '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-5px)'
                }
            }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2
                    }}>
                        <Typography
                            variant="h3"
                            sx={{
                                mr: 2,
                                color: color
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
                                color: 'primary.dark'
                            }}
                        >
                            {title}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            backgroundColor: color,
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