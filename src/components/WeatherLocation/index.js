import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    WINDY,
} from './../../constants/weatherConstants';

const data = {
    temperature:5,
    weatherState:SUN,
    humidity:10,
    wind:'10 m/s',
}

const data2 = {
    temperature:25,
    weatherState:WINDY,
    humidity:80,
    wind:'18 m/s',
}

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state={
            city:'Buenos Aires',
            data:data,
        };
    }

    handleUpdateClick=()=>{
        console.log("Update......");
        this.setState({
            city:'Bolivia!!!',
            data:data2,
        });
    }

    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;