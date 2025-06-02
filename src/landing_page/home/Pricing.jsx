import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="container   ">
        <div className="row">
          <div className="col-4  mx-5 my-4  ">
            <h1 className="fs-3 mb-5 mx-2">Unbeatable Pricing</h1>
            <p className="text-muted fs-6 mx-2">
              We prioneered the concept of discount broking and price
              transparency in India.Flat fees and no hidden charges
            </p>
            <a href="" style={{ textDecoration: "none" }} className="mx-2">
              See pricing <i className="ri-arrow-right-long-fill"></i>
            </a>
          </div>
          <div className="col-1"></div>
          <div className="col-6 text-center mt-4">
            <div className="row">
              <div className="col  p-2 border  ">
                <h1 className="m-3">₹0</h1>
                <p>
                  Free equity delivery and <br /> direct mutual fund
                </p>
              </div>
              <div className="col p-2 border">
                <h1 className="m-3">₹20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
