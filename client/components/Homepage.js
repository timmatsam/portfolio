import React from "react";
import { Headshot, About } from "../index";
export default () => {
  return (
    <div id="homepage">
      <div id="welcome">
        <Headshot />
        <p>
          I switched my career from medicine to programming. My background
          consisted of experiences such as hard science research e.g. pancreatic
          cancer, patenting a therapeutic drug, etc. Now as a graduate from a
          web development bootcamp, I hope to be able to pursue positions in
          backend, frontend or both and connect my expertise as a student of
          biology to them so as to solving challenging problems. My hobbies
          include reading, playing and improvising on the piano, and I am
          interested in infrastructure and machine learning (transportation,
          architecture). Currently job searching so let’s link up!{" "}
        </p>
      </div>
      <div id="caption">
        <h1>Welcome</h1>
        <img id="fuji" src="assets/fuji.jpg" />
        <p>Fuji-San. Started our hike up at 9pm - reached the top at 6am.</p>
      </div>
    </div>
  );
};
