import React, { Component } from 'react';

import { connect } from 'react-redux';

class WeatherList extends Component {
//npm i --save react-sparklines@1.6.0
  renderWeather(cityData) {
    const name = cityData.city.name;
    //since the data comes in a form of 
    //list: [ {main: {temp: 260, humidity: 40, pressure: 55 }} {main: {temp: 260, humidity: 40, pressure: 55 }} ...]
    //loop using map for weather.main
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    ); 
  }
}

//Mapping redux state to container props so it can be accessed within it
function mapStateToProps(state) {
  return { weather: state.weather };
}

//Export the container 
export default connect (mapStateToProps)(WeatherList);