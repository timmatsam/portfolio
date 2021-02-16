import React from "react";
import { Headshot, About } from "../index";
export default () => {
  return (
    <div id="homepage">
      <div id="welcome">
        <Headshot />
        <p>
          I recently switched my career from healthcare to programming. My
          background consisted of things such as researching pancreatic cancer
          and working as a pathology assistant. I am now a fresh graduate with
          expertise as a full stack web developer in which my skill set is
          primarily Node.js, React and PostgreSQL. I love to read - my favorite
          device of last year was the Kindle - and currently my interests lie in
          infrastructure (transportation, architecture) as well as improvising
          on piano (I love classical music) and learning electric guitar (I also
          love rock). Currently job searching so let’s link up!{" "}
        </p>
      </div>
      <div id="caption">
        <img id="fuji" src="assets/fuji.jpg" />
        <p>Fuji-San. Started our hike up at 9pm - reached the top at 6am.</p>
      </div>
    </div>
  );
};
