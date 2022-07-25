import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "c16af6a98f7ab67716a51f37d2a3ebe4";

function App() {
 const gettingWeather = async () => {
    const api_url = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${API_KEY}`
    );
    const data = await api_url.json();
    console.log(data);
  };

  return (
    <div className="App">
      <Info />
      <Form weatherMethod = {this.gettingWeather}/>
      <Weather />
    </div>
  );
}

export default App;
