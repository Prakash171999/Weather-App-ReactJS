import React, { useState, useEffect } from "react";
import axios from "axios";
import helpers from "./Helpers";

const api = {
  key: helpers.API_KEY,
  base: helpers.BASE_URL,
};

const TempApp = () => {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    search();
  }, [query])

  const search = (event) => {
    let url = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`;
    // if (event.key === "Enter") {
      fetch(url)
        .then((res) => res.json())
        .then((apiData) => {
          setWeather(apiData);
          console.log(apiData);
        });
    //}
  };

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="inputData">
          <input
            type="search"
            placeholder="Search...."
            className="inputField"
            onChange={handleInput}
            value={query}
            onKeyPress={search}
          />
        </div>
        {!query ? (
          <div className="noData">
            <p>No Data Found</p>
          </div>
        ) : (
          <div>
            <div className="info">
              <h2 className="title">Weather Condition</h2>
              {weather.temp > 26 ?
              (<img
              src="/images/hot.png"
              alt="weather-condition"
              className="weather-condition"
            />) : (
              <img
                src="/images/mild.png"
                alt="weather-condition"
                className="weather-condition"
              />
            )
              }
              

              <h2 className="location">
               {weather.name}
              </h2>
              <h2 className="date">Tuesday, 2021</h2>
              <h2 className="temp"> {weather.main.temp}°Cel</h2>
              <h3 className="tempmin_max">Min: {weather.main.temp_min} °Cel | Max: {weather.main.temp_max}°Cel</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
