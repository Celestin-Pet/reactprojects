import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Portfolio from '../components/Place';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />                
            <Services />            
            <Portfolio />            
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

