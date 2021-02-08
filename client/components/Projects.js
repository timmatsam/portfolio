import React from "react";
//moved img out of a
//change .indprojects a img to .indprojects img
export default () => {
  return (
    <div className="projects">
      <div class="indProjects">
        <a href="https://haircutz.herokuapp.com/">
          <img src="assets/haircutz.png" />{" "}
          <h3 class="redirect">Redirect to game.</h3>
        </a>

        <div>
          <h2>Haircutz Game</h2>
          <ul>
            <>Node.js |</>
            <> Phaser 3 |</>
            <> Socket.IO</>
          </ul>
          <p>
            A competitively styled online 2D tower defense style game where
            players compete against each other to garner a specific amount of
            resource points before the other player.{" "}
          </p>
        </div>
      </div>
      <div class="indProjects">
        <a href="https://oudoor-equipment-incorporated.herokuapp.com">
          <img src="assets/outdoor.png" />{" "}
          <h3 class="redirect">Redirect to ecommerce website.</h3>
        </a>
        <div>
          <h2>Outdoor Equipment E-commerce Website</h2>
          <ul>
            <>Node.js |</>
            <> React |</>
            <> Redux |</>
            <> PostgreSQL</>
          </ul>
          <p>
            An ecommerce website where users are able to purchase and checkout
            products with email confirmation. Users information is linked to a
            PostgreSQL database.
          </p>
        </div>
      </div>
    </div>
  );
};

//use react to write a piece of text on top of the image
//on hover let some text appear above the image
