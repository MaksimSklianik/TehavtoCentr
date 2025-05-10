import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

import { Container, Typography, Box } from '@mui/material';


const Appointment = () => {
    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Запись на сервис
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph sx={{ mb: 6 }}>
                Заполните форму и мы свяжемся с вами для уточнения деталей
            </Typography>

            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                <ContactForm />
            </Box>
        </Container>
    );
};

export default Appointment;