import React from "react";
import video1 from "../../public/matrimonioVideo1.mp4";
import image1 from "../../public/image1.png";

const Home = () => {
  return (
    <div className="home">
      <div className="header-linea"></div>
      <div className="div-video">
        <video
          src={video1}
          controls
          playsInline
        />
      </div>
      <img className="header-image1" src={image1} alt="" />
    </div>
  );
};

export default Home;
