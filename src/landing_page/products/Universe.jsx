import React from "react";

export default function Universe() {
  return (
    <>
      <div className="container text-center text-muted">
        <div className="row px-5">
          <p className="mb-5 fs-5">
            Want to know more about our technology stack? Check out the
            <a href="">SwiftTrade.tech</a> blog.
          </p>

          <h1 className="mt-5 mb-4">The SwiftTrade Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-4 p-5 ">
            <img
              src="assets/SwiftTradeFundhouse.png"
              alt=""
              style={{
                width: "60%",
                marginBottom: "1rem",
              }}
            />
            <p style={{ fontSize: "13px" }}>
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
            <img
              src="assets/streakLogo.png"
              alt=""
              style={{ width: "60%", marginBottom: "1rem", marginTop: "2rem" }}
            />
            <p style={{ fontSize: "13px" }}>
              Systematic trading platform <br /> that allows you to create and
              backtest <br />
              strategies without coding.
            </p>
          </div>

          <div className="col-4 p-5">
            <img
              src="assets/sensibulllogo.png"
              alt=""
              style={{
                width: "62%",
                marginBottom: "1.6rem",
                marginTop: "0.5rem",
              }}
            />
            <p style={{ fontSize: "13px" }}>
              Options trading platform that lets you <br /> create strategies,
              analyze positions, and examine <br /> data points like open
              interest, FII/DII, and more.
            </p>
            <img
              src="assets/smallcaseLogo.png"
              alt=""
              style={{
                width: "60%",
                marginBottom: "1.5rem",
                marginTop: "2.5rem",
              }}
            />
            <p style={{ fontSize: "13px" }}>
              Thematic investing platform <br /> that helps you invest in
              diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              src="assets/tijori.svg"
              alt=""
              style={{ width: "45%", marginBottom: "1rem" }}
            />
            <p style={{ fontSize: "13px" }}>
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
            <img
              src="assets/dittoLogo.png"
              alt=""
              style={{
                width: "45%",
                marginBottom: "1.2rem",
                marginTop: "2rem",
              }}
            />
            <p style={{ fontSize: "13px" }}>
              Systematic trading platform <br /> that allows you to create and
              backtest <br />
              strategies without coding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
