import React, { useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const MapSection = (props) => {

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };



  return (
    <Map
      google={props.google}
      style={{ width: "100%", height: "100%" }}
      initialCenter={props.initialCenter}
      zoom={props.zoom ?? 5}
      containerStyle={containerStyle}
    >
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCAB5OJvg5OVW2J6CSZliYG-WQ63gcgpbI",
})(MapSection);
