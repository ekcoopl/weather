import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "c16af6a98f7ab67716a51f37d2a3ebe4";

function App() {
  
  const state = {
    temp: 'undefined',
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  };

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await api_url.json();
    console.log(data);

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunrise,
      error: "",
    });
  };

  return (
    <div className="App">
      <Info />
      <Form weatherMethod={gettingWeather} />
      <Weather
        temp={state.temp}
        city={state.city}
        country={state.country}
        sunrise={state.sunrise}
        sunset={state.sunset}
        error={state.error}
      />
    </div>
  );
}

export default App;
