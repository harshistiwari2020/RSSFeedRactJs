import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Feeds } from "./components/Feeds";
import { URLForm } from "./components/URLForm";

function App() {
// Driver function to run the app
  const [feeds, setFeeds] = useState([]);
  return (
    <div className="App">
      <Container style={{ marginTop: 40 }}>
        {/* A URL form(Search bar) to accept the given url and show result */}
        <URLForm onNewRssFeed={(new_feeds) => setFeeds(new_feeds)} />
        {/* Show the feeds in list */}
        <Feeds feeds={feeds} />
      </Container>
    </div>
  );
}

export default App;
