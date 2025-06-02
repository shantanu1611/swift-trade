import React from "react";

export default function Award() {
  return (
    <>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-6">
            <img
              src="assets/largestBroker.svg"
              alt=""
              style={{ height: "95%" }}
            />
          </div>
          <div className="col-6 ">
            <h1 className="mt-4">Largest Stock broker in India</h1>
            <p className="mb-5">
              2+ millon SwiftTrade clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in :
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Future and options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stock & IPOs</p>
                  </li>
                  <li>
                    <p>Direct Mutual funds</p>
                  </li>
                  <li>
                    <p>Bond and </p>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="assets/pressLogos.png"
              alt=""
              className="ms-5 mt-2"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
