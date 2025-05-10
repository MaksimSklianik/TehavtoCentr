import React from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { Container, Typography, Grid } from '@mui/material';


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
        <Container sx={{ py: 8 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Наши услуги
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph sx={{ mb: 6 }}>
                ООО «Техавтоцентр» предлагает полный спектр услуг по обслуживанию и ремонту автомобилей
            </Typography>

            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ServiceCard {...service} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default Services;