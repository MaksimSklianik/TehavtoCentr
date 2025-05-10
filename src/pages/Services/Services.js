import React from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { Container, Typography, Grid, Box } from '@mui/material';

const services = [
    {
        title: 'Техническое обслуживание',
        description: 'Полное ТО вашего автомобиля по регламенту производителя',
        image: '/images/service1.jpg',
        price: '3000'
    },
    {
        title: 'Компьютерная диагностика',
        description: 'Современная диагностика всех систем автомобиля',
        image: '/images/service2.jpg',
        price: '2000'
    },
    {
        title: 'Ремонт двигателя',
        description: 'Капитальный и текущий ремонт двигателей любой сложности',
        image: '/images/service3.jpg',
        price: '5000'
    },
    {
        title: 'Шиномонтаж',
        description: 'Профессиональный шиномонтаж и балансировка колес',
        image: '/images/service4.jpg',
        price: '1000'
    },
];

const Services = () => {
    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            bgcolor: 'background.default',
            py: 8
        }}>
            <Container maxWidth="md">
                <Box sx={{
                    textAlign: 'center',
                    mb: 6
                }}>
                    <Typography variant="h2" gutterBottom>
                        Наши услуги
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        ООО «Техавтоцентр» предлагает полный спектр услуг по обслуживанию и ремонту автомобилей
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4
                }}>
                    {services.map((service, index) => (
                        <Box key={index} sx={{ width: '100%', maxWidth: '600px' }}>
                            <ServiceCard {...service} />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Container>
    );
};

export default Services;