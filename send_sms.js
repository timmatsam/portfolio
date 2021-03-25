const accountSid = "AC497f21f64eda3d573f41fecba0229f89";
const authToken = "84523f4cb7e0eb2c569afd94e6886700";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+17159974028",
    mediaUrl: [
      "https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?resize=1320%2C1320&ssl=1",
    ],
    to: "+16316174674",
  })
  .then((message) => console.log(message.subresourceUris.media));
