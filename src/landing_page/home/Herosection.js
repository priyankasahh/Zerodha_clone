import React from "react";

function HeroSection() {
  return (
    <div className="container p-5 text-center mb-5">
      <div className="row justify-content-center">
        <img
          src="media/images/homeHero.png"
          alt="Homeherosection image"
          className="mb-5"
        />
      </div>
      <h1 className="mt-5">Invest in everything</h1>
      <p>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>
      <div className="d-flex justify-content-center">
        <button
          style={{ width: "25%" }}
          className="p-2 btn btn-primary fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
