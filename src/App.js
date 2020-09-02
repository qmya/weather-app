import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './components/Form/Form.js';
import Weather from './components/Weather/Weather.js';
import './App.css';
import { Component } from 'react';

//Got api key from open weather api
const API_key= "8944558bae24d81032d1cab95ceab2e3";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon : undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
   
  }
   //Converting it into celcius
  calCelsius(temp){
    let cell = Math.floor(temp - 237.15);
    return cell;
  }

  get_weatherIcon(icons,rangeId){
    switch(true){
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
        case rangeId >= 600 && rangeId <= 622:
          this.setState({icon:this.weatherIcon.Snow});
          break;
          case rangeId >= 701 && rangeId <=781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
        case rangeId == 800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
        case rangeId >= 801 && rangeId <= 804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
        default:
        this.setState({icon:this.weatherIcon.Clouds});
    }
  }
  getWeather = async() =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);
    //convert the data into json
    const response = await api_call.json();
    console.log(response);
    this.setState({
      city: response.name,
      country:response.sys.country,
      celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description,
      icon:this.weatherIcon.Thunderstorm
    })
    this.get_weatherIcon(this.weatherIcon,response.weather[0].id)
  }
  render(){
    return(
      <div className="App">
        <h1> Weather App </h1>
        <Form/>
        <Weather city={this.state.city} 
        country={this.state.country} 
        temp_celcius={this.state.celsius} 
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        />
      </div>
    )
  }
}

export default App;
