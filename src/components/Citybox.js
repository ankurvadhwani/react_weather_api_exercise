import React, { useState, useEffect } from "react";

function CityBox(props) {
  let url = props.url;
  let [citydata, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  if (citydata) {
    let { main } = citydata;
    let cel = main.temp - 272.15;
    let far = cel * 1.8 + 32;
    return (
      <div className="citybox">
        <h2>{citydata.name}</h2>
        <h1>{cel.toFixed(2)}°C</h1>
        <h1>{far.toFixed(2)}°F</h1>
      </div>
    );
  } else {
    return "null";
  }
}

export default CityBox;
