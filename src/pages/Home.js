

import React from 'react';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import JoinSection from '../components/joinSection/Join';


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






