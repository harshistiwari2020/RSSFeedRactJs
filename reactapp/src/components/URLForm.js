import React, { useState } from "react";
import { Form, Input, Rating, Button } from "semantic-ui-react";

export const URLForm = ({ onNewRssFeed }) => {
  // A URL Form to accept the url. It also fetch the feeds and return it as onNewRssFeed function
  const [url, setURL] = useState("");

  return (
    <Form>
      {/* Search bar */}
      <Form.Field>
        <Input
          placeholder="Enter RSS Feed URL..."
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
      </Form.Field>


      <Form.Field>
        <Button
          onClick={async () => {

            // Add headers
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            // jsonify the given url
            var raw = JSON.stringify({ "url": url });

            // create an object to pass it to fetch
            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };

            // fetch new response
            const response = await fetch("/get_feeds", requestOptions)
              .then((response) => response.text())
              .then(function (result) {
                result = JSON.parse(result);
                console.log("response Worked");
                console.log(result)
                // Run this function when recieved result.
                onNewRssFeed(result);
              })
              .catch((error) => console.log("error", error)); // Just console log the errors.
          }}
        >
          submit
        </Button>
      </Form.Field>
    </Form>
  );
};
