import React from "react";
import { Headshot } from "./Headshot";
import { About} from "./About";

export const Homepage = () => {
  return (
    <div id="homepage">
      <div id="welcome">
        <Headshot />
        <About />
      </div>
      <div id="caption">
        <img id="fuji" src="assets/fuji.jpg" />
        <p>Fuji-San. Started our hike up at 9pm - reached the top at 6am.</p>
      </div>
    </div>
  );
};
