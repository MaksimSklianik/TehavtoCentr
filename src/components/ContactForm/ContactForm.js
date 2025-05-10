import { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    MenuItem,
    Container,
    Alert,
    Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import * as yup from 'yup';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.light,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.dark,
        },
    },
    marginBottom: '20px',
    width: '100%'
}));

const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    phone: yup.string()
        .required('Обязательное поле')
        .matches(/^(\+7|8)[0-9]{10}$/, 'Введите российский номер телефона'),
    email: yup.string().email('Введите корректный email'),
    service: yup.string().required('Выберите услугу'),
    message: yup.string()
});

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    const services = [
        '🚗 Техническое обслуживание',
        '🔧 Ремонт',
        '💻 Диагностика',
        '🔄 Шиномонтаж',
        '🧼 Автомойка',
        '🔩 Продажа комплектующих',
        '❓ Другое'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});

            console.log('Форма отправлена:', formData);
            setOpenSuccess(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                message: ''
            });
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach(error => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
            setOpenError(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
        setOpenError(false);
    };

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        color: 'primary.dark',
                        fontWeight: 700,
                        textAlign: 'center'
                    }}
                >
                    📨 Связаться с нами
                </Typography>
                <Typography
                    paragraph
                    sx={{
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    Оставьте заявку на обслуживание или задайте вопрос нашим специалистам
                </Typography>
            </motion.div>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    mt: 3,
                    p: 4,
                    borderRadius: 1,
                    boxShadow: 3,
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ width: '100%' }}
                >
                    <StyledTextField
                        label="Имя *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ width: '100%' }}
                >
                    <StyledTextField
                        label="Телефон *"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+79991234567"
                        error={!!errors.phone}
                        helperText={errors.phone || "Формат: +79991234567"}
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ width: '100%' }}
                >
                    <StyledTextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ width: '100%' }}
                >
                    <StyledTextField
                        select
                        label="Выберите услугу *"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        error={!!errors.service}
                        helperText={errors.service}
                    >
                        {services.map((service) => (
                            <MenuItem key={service} value={service}>
                                {service}
                            </MenuItem>
                        ))}
                    </StyledTextField>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ width: '100%' }}
                >
                    <StyledTextField
                        label="Сообщение"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ width: '100%', marginTop: '20px' }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                            py: 2,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(45deg, #1976d2 0%, #263238 100%)'
                        }}
                    >
                        Отправить заявку
                    </Button>
                </motion.div>
            </Box>

            <Snackbar
                open={openSuccess}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </Alert>
            </Snackbar>

            <Snackbar
                open={openError}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Пожалуйста, исправьте ошибки в форме.
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactForm;