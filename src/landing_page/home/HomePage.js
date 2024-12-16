import React from 'react';
import HeroSection from './Herosection';
import Awards from './Awards';
import Education from './Education';
import Pricings from './Pricings';
import Stats from './Stats';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';




function HomePage() {
    return ( 
        <>
          
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricings/>
        <Education/>
        <OpenAccount/>
       
        
        </>
     );
}

export default HomePage;
