import React from "react";
import Loader from "./Loader";

const ImageDisplay = ({ image }) => {
  return (
    <>
      {!image ? <Loader /> : <img className="shadow-lg" src={image} alt="" />}
    </>
  );
};

export default ImageDisplay;
