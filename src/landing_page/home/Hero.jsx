import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img src="assets/homeHero.png" alt="hero image" className="mb-5" />

          <h1 className="mt-4">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives,mutual funds,and
            more
          </p>
          <button
            type="button"
            className="btn btn-primary mx-auto p-2 mb-5"
            style={{ width: "20%", fontSize: "1.2rem" }}
          >
            Singup Now
          </button>
        </div>
      </div>
    </>
  );
}
