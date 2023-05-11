import React from "react";
import PropTypes from "prop-types";

import './News.css'
const YoutubeEmbed = () => (<>
  <div className="news-app1"/>
  <div className="news-item1">
  <div className="video-responsive">
    <iframe
      width="830"
      height="480"
      src={`https://www.youtube.com/embed/suRrRK987Vs`}
      frameBorder="2px solid"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ; resize,"
      allowFullScreen
      title="Embedded youtube"
    />  
  </div></div></>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;