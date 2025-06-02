import React from "react";

export default function RightSection({
  imageUrl,
  producName,
  producDiscription,
  learnmore,
  marginTop,
  marginLeft,
}) {
  return (
    <>
      <div className="container text-muted px-5">
        <div className="row ">
          <div className="col-4 p-5 " style={{ marginTop, marginLeft }}>
            <h1 className="mt-4 pt-5 mb-3">{producName}</h1>
            <p style={{ lineHeight: "1.6rem", fontSize: "17px" }}>
              {producDiscription}
            </p>
            <a href={learnmore}>
              Learn more <i class="ri-arrow-right-long-line"></i>
            </a>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
