import { Box } from '@mui/material';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import About from '../About/About';
import Contact from '../../components/Contact/Contacts';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    return (
        <motion.div style={{ opacity }}>
        <Box>
            <Hero />
            <Services />
            <About />
            <Contact />
        </Box>
        </motion.div>
    );
};

export default Home;