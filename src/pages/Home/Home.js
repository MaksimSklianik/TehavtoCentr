import { Box } from '@mui/material';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import About from '../About/About';
import Contact from '../../components/Contact/Contacts';

const Home = () => {
    return (
        <Box>
            <Hero />
            <Services />
            <About />
            <Contact />
        </Box>
    );
};

export default Home;