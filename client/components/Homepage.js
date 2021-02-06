import React from "react";
import { Headshot, About } from "../index";
export default () => {
  return (
    <div id="homepage">
      <div id="welcome">
        <Headshot />
        {/* <h1>Welcome</h1> */}
        <About />
      </div>
      <div id="caption">
        <img id="fuji" src="assets/fuji.jpg"></img>
        <p>Fuji-San. Started our hike up at 9pm - reached the top at 6am.</p>
      </div>
    </div>
  );
};
