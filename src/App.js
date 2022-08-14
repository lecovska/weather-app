import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=348af94147cf6652f23ba5658d65cd6b`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })

      setLocation("")
    }
  }

const zeroKelvin = 273.15;

function kelvinToCelsius(kelvin)
{
  return kelvin - zeroKelvin;
}
 
 
  return (
    <div className="app">
      <div className='locationInfo'>
        <input type='text' value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="City name"></input>
        <h2>{data.name}</h2>
      </div>
      <div className='content'>
<div className='details'>{data.main ? <h1>{Math.round(kelvinToCelsius(data.main.temp))} &#8451;</h1> : null}</div>
<div className='details'>{data.main ? <p className='description'>{(data.weather[0].main.toUpperCase())}</p> : null}</div>
<div className='details'> {data.main ? <p><p>Feels like:</p> <span>{Math.round(kelvinToCelsius(data.main.feels_like))} &#8451;</span> </p> : null}</div>
<div className='details'>{data.main ? <p><p>Humidity:</p>  <span> {data.main.humidity}%</span> </p> : null}</div>
<div className='details'>{data.wind ? <p><p>Wind speed:</p> <span> {data.wind.speed} m/s</span></p> : null}</div>
      </div>
    </div>

  );
}

export default App;
