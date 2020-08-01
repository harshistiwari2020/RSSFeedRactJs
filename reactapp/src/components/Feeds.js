import React from "react";
import FeedCard from './FeedCard.js'
import { List, Header, Rating } from "semantic-ui-react";

export const Feeds = ({ feeds }) => {
  return (
    <List>
      {/* A list of cards for result form the rss feed */}
      {feeds.map((feed) => {
        return (
          <List.Item key={feed["link"]}>
            {/* An display element for each feeds  */}
            <FeedCard rss_feed={feed}/>
          </List.Item>
        );
      })}
    </List>
  );
};
