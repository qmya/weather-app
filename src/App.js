import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather/Weather.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <Weather/>
    </div>
  );
}

export default App;
