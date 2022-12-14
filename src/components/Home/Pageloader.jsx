import React from "react";

export default function Pageloader() {
  return (
    <div className="page-loader-wrapper" style={{ display: "none" }}>
      <div className="loader">
        <div className="preloader">
          <div className="spinner-layer pl-red">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
        <p>Please wait...</p>
      </div>
    </div>
  );
}
