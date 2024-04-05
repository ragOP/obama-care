import React from "react";

const Boxes = ({ imageUrl, description }) => {
  return (
    <div className="box-container">
      <div className="image-container">
        <img src={imageUrl} alt="Box" className="box-image" />
      </div>
      <div className="description-container">
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Boxes;
