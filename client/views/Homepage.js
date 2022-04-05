import React from 'react';
import Headshot from '../components/homepage/Headshot';
import About from '../components/homepage/About';

function Homepage() {
  return (
    <div id="homepage">
      <div id="welcome">
        <Headshot />
        <About />
      </div>
      <div id="caption">
        <img id="fuji" src="assets/fuji.jpg" alt="highest-point-on-mount-fuji" />
        <p>Fuji-San. Started our hike up at 9pm - reached the top at 6am.</p>
      </div>
    </div>
  );
}

export default Homepage;
