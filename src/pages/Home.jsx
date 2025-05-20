import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <main>
            <Navbar />
            <Banner />
            <Services />
            <About />
            <Footer />
        </main>

    );
}
  
export default Home;
  