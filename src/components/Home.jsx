import Navbar from './sub-components/Navbar';
import Footer from './sub-components/Footer';
import Hero from './sub-components/Hero';
import Menu from './sub-components/Menu';
import Gallery from './sub-components/Gallery';
import Contact from './sub-components/Contact';
import BookTable from './sub-components/BookTable';
import PrivateDining from './sub-components/PrivateDining';

const home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <Gallery /> {/* about us */}  
            <PrivateDining/> 
            <BookTable />
            <Contact />
            <Footer />
        </ >
    );
    }
    export default home;