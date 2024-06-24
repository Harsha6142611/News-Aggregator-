import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [feel, setFeel] = useState();
  const [temp, setTemp] = useState();
  const [desc, setDesc] = useState();
  const [src, setSrc] = useState();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [showCard, setShowCard] = useState(false);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?APPID=cd2f130bbd95a330d9edb40d200f98a8&q=" +
          city +
          "&units=metric"
      );
      const data = response.data;
      setTemp(data.main.temp);
      setFeel(data.main.feels_like);
      setDesc(data.weather[0].description);
      setMax(data.main.temp_max);
      setMin(data.main.temp_min);
      setSrc(
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      );
      setShowCard(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Enter the city"
            className="form-control mb-3"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="btn btn-primary btn-block mb-3"
          >
            Send
          </button>
        </div>
      </div>
      {showCard && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              <div className="card-body">
                <h2 className="card-title">{city.toUpperCase()}</h2>
                <div className="d-flex justify-content-center align-items-center">
                  <img src={src} alt={desc} className="w-25" />
                  <div>
                    <h3>Current Temp</h3>
                    <h4>
                      {temp}
                      <sup>ºC</sup>
                    </h4>
                  </div>
                </div>
                <h3 className="card-subtitle mb-2">
                  {desc.charAt(0).toUpperCase() + desc.slice(1)}
                </h3>
                <h4>
                  {max}º / {min}º
                </h4>
                <h5>Feels like {feel}º</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
