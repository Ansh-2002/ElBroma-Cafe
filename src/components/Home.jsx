import Navbar from './sub-components/Navbar';
import Footer from './sub-components/Footer';
import Hero from './sub-components/Hero';
import Menu from './sub-components/Menu';
import Gallery from './sub-components/Gallery';
import Contact from './sub-components/Contact';

const home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <Gallery />
            <Contact />
            <Footer />
        </>    
    );
    }
    export default home;