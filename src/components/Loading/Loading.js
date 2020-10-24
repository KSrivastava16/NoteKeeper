import React from "react";
import LoadingGif from "../../images/Pulse-0.9s-200px.gif";
import LoadingGif2 from "../../images/Spin-1s-200px.gif";
import "./Loading.css";

const Loading = ({ type }) => {
  return (
    <div className="loading " style={{ marginTop: "20px" }}>
      <img src={type === "login" ? LoadingGif2 : LoadingGif} alt="Loading" />
      <h3>{type === "login" ? "Logging You in" : "Loading Content"}...</h3>
    </div>
  );
};

export default Loading;
