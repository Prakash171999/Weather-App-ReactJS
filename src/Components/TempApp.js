import React, { useState, useEffect } from "react";
import helpers from "./Helpers";


const api = {
  key: helpers.API_KEY,
  base: helpers.BASE_URL,
};

const TempApp = () => {
  
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  //fetching data from openweather api
  useEffect(() => {
    const fetchApi = async () => {
      const url = `${api.base}weather?q=${query}&appid=${api.key}`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setWeather(resJson);
    };
    fetchApi();
  }, [query]);

  const handleInput = (event) => {
    setQuery(event.target.value)
  };

  return (
    <>
      <div className="main">
        <div className="inputData">
          <input type="search" placeholder="Search...." className="inputField" onChange={handleInput} />
        </div>
        {!query ? (
          <div className="noData">
            <p>No Data Found</p>
          </div>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">Kathmandu, Nepal</h2>
              <h2 className="date">Tuesday, 2021</h2>
              <img src="/images/hot.png" alt="weather-condition" className="weather-condition" />
              <h2 className="temp">26 C</h2>
              <h3 className="tempmin_max">Min : 5.25Cel | Max : 5.25 Cel </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
