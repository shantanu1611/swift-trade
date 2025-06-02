import React from "react";

export default function Team() {
  return (
    <>
      <div className="container mb-5 px-4">
        <div className="row">
          <h1 className="text-center p-5 ">People</h1>
        </div>
        <div
          className="row mt-5 p-5 text-muted"
          style={{ lineHeight: "1.8rem", fontSize: "17px" }}
        >
          <div className="col-6 px-5 text-center ">
            <img
              src="assets/situ.jpg"
              alt=""
              style={{
                borderRadius: "100%",
                width: "60%",
                margin: "3.5rem 0 0 10rem ",
              }}
            />
            <h4 className="mt-3" style={{ marginLeft: "10.5rem" }}>
              Shantanu Prasad
            </h4>
            <h6 className="mt-4 mb-4" style={{ marginLeft: "10.5rem" }}>
              React Developer | Personal Project
            </h6>
          </div>
          <div className="col-6 p-5 mt-2 " style={{ marginLeft: "-20px" }}>
            <p className="">
              Shantanu conceptualized and developed SwiftTrade as a portfolio
              project to demonstrate his skills in modern web development using
              React. This project reflects his passion for clean UI, real-time
              data handling, and user-focused design. While SwiftTrade is not a
              live trading platform, it showcases the core features one would
              expect from a responsive and interactive trading dashboard.
            </p>
            <p>
              Shantanu is an enthusiastic learner, with experience in frontend
              technologies and a growing understanding of financial systems.
            </p>
            <p>
              Shantanu is a dedicated developer with a strong interest in
              fintech and frontend development. When he's not coding, he enjoys
              gaming, which inspires his creativity and sharpens his
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
