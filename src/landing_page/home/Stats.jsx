import React from "react";

export default function Stats() {
  return (
    <>
      <div className="container p-3 ">
        <div className="row p-5 ">
          <div className="col-6 p-5 mt-5  ">
            <h2 className="mb-5 ">Trust with confidence</h2>
            <h4>Customer-first always</h4>
            <p className="mb-3 text-muted">
              That's why 1.3+ crore customer trust SwiftTrade with ₹3.5+ lakh
              crores worth of equity investment
            </p>
            <h4>No spam or gimmicks</h4>
            <p className="mb-3 text-muted">
              No gimmicks, spam, "gamification", or annoying push notification.
              High quality apps that you use at your pace, the way you like
            </p>
            <h4>The SwiftTrade universe</h4>
            <p className="mb-3 text-muted">
              Not just an app, but a whole ecosystem. Our investment in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4>Do better with money</h4>
            <p className="mb-3 text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transaction, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 px-3 mt-4  ">
            <img src="assets/ecosystem.png" alt="" style={{ width: "90%" }} />
            <div className="text-center">
              <a href="" className="mx-5" style={{ textDecoration: "none" }}>
                Explore our products<i className="ri-arrow-right-long-fill"></i>
              </a>
              <a href="" style={{ textDecoration: "none" }}>
                Try Kite demo <i className="ri-arrow-right-long-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
