import  React from 'react';
import  WeatherIcons  from 'react-weathericons';
import  PropTypes from "prop-types";
import { 
    CLOUD,
    RAIN,
    SNOW,
    SUN,
    THUNDER,
    DRIZZLE
} from '../../../constants/weather';
import './styles.css';

const icons = {
    [CLOUD]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers"
}

const getWeatherIcon = weatherState => {
    const sizeIcon = "3x";
    const icon = icons[weatherState];
    
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else 
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon}/>

}
const WeatherTemperature = ({temperature, weatherState}) =>{
    return <div className="weatheTemperatureContainer">
        {getWeatherIcon(weatherState)}
        <div className="temperatureContainer">
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">{` °C`}</span>
        </div>
    </div>
};

WeatherTemperature.propTypes = {
    temperature:PropTypes.number,
    weatherState: PropTypes.string.isRequired

} 

export default WeatherTemperature;