import React from 'react'
import { Card } from 'semantic-ui-react'


export const colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]

const FeedCard = ({rss_feed}) => (
  // A Card for showing the rss fied beaultifully.
  <Card centered fluid
  color= {colors[Math.floor(Math.random()*colors.length)]}
    header={rss_feed["title"]}
    meta={rss_feed["published"]}
    description={rss_feed["summary"]}
    // Open feed result in new tab -> 
    onClick={(e, d)=>{
        window.open(rss_feed["link"], "_blank")
    }}
  />
)

export default FeedCard
