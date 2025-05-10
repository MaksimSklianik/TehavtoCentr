import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Stats = () => {
    const statsData = [
        { value: '10+', label: 'Лет опыта' },
        { value: '5000+', label: 'Довольных клиентов' },
        { value: '59', label: 'Специалистов' },
        { value: '24/7', label: 'Эвакуатор' },
    ];

    return (
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
            <Grid container spacing={2} justifyContent="center">
                {statsData.map((stat, index) => (
                    <Grid item key={index} xs={6} sm={3}>
                        <Box textAlign="center">
                            <Typography variant="h3" color="primary" fontWeight="bold">
                                {stat.value}
                            </Typography>
                            <Typography variant="subtitle1">{stat.label}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Stats;