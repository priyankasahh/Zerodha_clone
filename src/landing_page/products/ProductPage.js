import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Product_Herosection from "./Product_Herosection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Product_Herosection />
      <LeftSection
        imageURL="media/images/kite.png"
        productNAme="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
       imageURL="media/images/console.png"
       productNAme="Console"
       productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productNAme="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
       imageURL="media/images/kiteconnect.png"
       productNAme="Kite Connect API"
       productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productNAme="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
     <p className="text-center fs-4 text-muted">Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
  
      <Universe />
    </>
  );
}

export default ProductPage;
