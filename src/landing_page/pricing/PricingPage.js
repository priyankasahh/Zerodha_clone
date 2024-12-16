import React from 'react';
import Pricing_Herosection from './Pricing_Herosection';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
        <Pricing_Herosection/>
        <OpenAccount/> 
        <Brokerage/>
        </>
     );
}

export default PricingPage ;