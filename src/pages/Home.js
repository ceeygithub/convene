

import React from 'react';
import Hero from '../components/hero/Hero';
import JoinSection from '../components/joinSection/Join';
import Footer from '../components/footer/Footer'


const Home = () => {
 

    return (
        <div className="banner-section">
            {/* <Navbar /> */}
            <Hero />
            <JoinSection />
            <Footer/>
           
        </div>
    );
};

export default Home;






