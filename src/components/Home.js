import React, { useState } from "react";
import Axios from "axios";
import Citybox from "./Citybox";
function Home() {
  let [cityName, setCityName] = useState(null);
  let [cityList, setCityList] = useState([]);

  function ChangeListener(e) {
    setCityName(e.target.value);
  }
  function ClickListener() {
    setCityList(previousList => {
      return [...previousList, cityName];
    });
  }
  return (
    <div className="div">
      <input
        onChange={ChangeListener}
        type="text"
        placeholder="Enter City Name"
      />
      <span>
        <button onClick={ClickListener} value="Add City">
          Add City
        </button>
      </span>
      {cityList.map(city => {
        let url =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=33d0ae79aadc800a9e6eb960dbf19ed8";
        return <Citybox url={url} />;
      })}
    </div>
  );
}
export default Home;
