import React from "react";

export default function Hero() {
  return (
    <>
      <div
        className="container 
      "
      >
        <div className="row text-center p-5 text-muted  ">
          <h1 className="mt-5  ls-2 fw-medium" style={{ fontSize: "45px" }}>
            SwiftTrade Products
          </h1>
          <h3 className="mt-2 fs-5 text-muted">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mt-3 text-muted fs-6 mb-5">
            Check out our <a href="">investment offerings → </a>
          </p>
        </div>
      </div>
    </>
  );
}
