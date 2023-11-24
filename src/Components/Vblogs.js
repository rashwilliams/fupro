import React, { Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Rashidi from "../Assets/Images/Rashidi.jpeg";
import styles from "./Vblogs.module.css";

const Vblogs = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Form.Control
              className={styles.formcontrol}
              placeholder="Search Videos collections"
            />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>

      <Container className={styles.container}>
        <Row>
          <Col></Col>
          <Col>
            <div style={{}}>
              <Card style={{ width: 400 }}>
                <CardActionArea className={styles.AA}>
                  <CardMedia img src={Rashidi} title="Prayer for William" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      OutFilm
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Prayer for William
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Comment
                  </Button>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <div style={{}}>
              <Card style={{ width: 400 }}>
                <CardActionArea className={styles.AA}>
                  <CardMedia img src={Rashidi} title="Prayer for William" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      OutFilm
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Prayer for William
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Comment
                  </Button>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <div style={{}}>
              <Card style={{ width: 400 }}>
                <CardActionArea className={styles.AA}>
                  <CardMedia img src={Rashidi} title="Prayer for William" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      OutFilm
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Prayer for William
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Comment
                  </Button>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Vblogs;

// const Vblogs = () => {
//   return <div>Video Blogs</div>;
// };

// export default Vblogs;

// import { Morevert, PlaylistAdd, WatchLater } from "@mui/material";
// import Rashidi from "../Assets/Images/Rashidi.jpeg";
// import styles from "./Vblogs.module.css";
// import { useEffect, useRef } from "react";
// import cloudinary from "cloudinary-video-player";
// import { Player } from "video-react";

// const Vblogs = () => {
//   return (
//     <Player
//       playsInline
//       poster="/assets/poster.png"
//       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//     />
//   );
// };

// export default Vblogs;

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
