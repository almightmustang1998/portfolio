//big shout out to Josiel Delgadillo as I got this idea from his personal site
import React from "react";
import Res from "../ChavezCarlos2021.pdf";
import Navbar from "./Navbar";

export default function Resume() {
  return (
    <div className="container-fluid">
        <Navbar/>
      <div className="container">
        <iframe
          src={Res}
          className="resx2"
          width="100%"
          height="800px"
          allowfullscreen=""
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}