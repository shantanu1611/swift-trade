import React from "react";

export default function LeftSection({
  imageURL,
  producName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container p-1">
        <div className="row p-5">
          <div className="col-6 p-5">
            <img src={imageURL} alt="" />
          </div>
          <div className="col-1"></div>
          <div className="col-4 p-5 mt-5 text-muted ">
            <h1 className="fs-2">{producName}</h1>
            <p className="mt-4 mb-5">{productDescription}</p>
            <div>
              <a href={tryDemo} className="">
                Try Demo <i class="ri-arrow-right-long-line"></i>
              </a>
              <a href={learnMore} style={{ marginLeft: "20px" }}>
                Learn more <i class="ri-arrow-right-long-line"></i>
              </a>
            </div>
            <div className="mt-4 ">
              <a href={googlePlay} className="">
                <img src="assets/googlePlayBadge.svg" alt="" />
              </a>
              <a href={appStore} style={{ marginLeft: "20px" }}>
                <img src="assets/appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
