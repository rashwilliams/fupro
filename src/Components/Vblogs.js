import React from "react";
// import { Morevert, PlaylistAdd, WatchLater } from "@mui/material";
// import Rashidi from "../Assets/Images/Rashidi.jpeg";
// import styles from "./Vblogs.module.css";
// import { useEffect, useRef } from "react";
// import cloudinary from "cloudinary-video-player";
import { Player } from "video-react";

const Vblogs = () => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};

export default Vblogs;

// // import "cloudinary-video-player/dist/cld-video-player.min.css";

// // const Vblogs = () => {
// //   return (
// //     // <Fragment>
// //     //   <div>
// //     //     <img src={Rashidi} className={styles.Rashidi}></img>
// //     //   </div>
// //     //   <h4> This is React Video</h4>;<p>Dev</p>;
// //     // </Fragment>

// const Vblogs = () => {
//   const demoplayer = cloudinary.videoPlayer("doc-player", {
//     cloudName: "demo",
//   });
//   const cloudinaryRef = useRef();
//   const videoRef = useRef();

//   useEffect(() => {
//     if (cloudinaryRef.current) return;

//     cloudinaryRef.current = window.cloudinary;
//     cloudinaryRef.current.videoPlayer(videoRef.current, {
//       cloud_name: "colbycloud-examples",
//     });
//   }, []);

//   return <video ref={videoRef} />;
// };

// export default Vblogs;
