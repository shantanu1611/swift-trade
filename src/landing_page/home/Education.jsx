import React from "react";

export default function Education() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 my-5 ">
            <img src="assets/education.svg" alt="" style={{ width: "70%" }} />
          </div>

          <div className="col-6">
            <h1 className="fs-3 my-5">Free and open market education</h1>
            <p className="text-muted fs-6">
              Vasity, the largest online stock market eductaion book in the
              world covering everything from the basic to advanced training.
            </p>
            <a href="" style={{ textDecoration: "none" }} className="mt-n1">
              Versity <i className="ri-arrow-right-long-fill"></i>
            </a>
            <p className="text-muted fs-6 mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related querries
            </p>
            <a href="" style={{ textDecoration: "none" }} className="mt-n1">
              TradingQ&A <i className="ri-arrow-right-long-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
