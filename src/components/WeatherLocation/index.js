import  React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherData from './WeatherData';
import Location from './Location';
import './styles.css';
import { PropTypes } from 'prop-types';


// handleUpdateClick = () =>{
//     const api_weather =  getUrlWeatherByCity(this.state.city);
//     fetch(api_weather).then(resolve =>{
//         return resolve.json();
//     }).then(data=>{
//         const newWeather = transformWeather(data);
//         console.log('data',data);
//         this.setState({
//             data: newWeather
//         })
//     });
// }
const WeatherLocation = ({onWeatherLocationClick,city,data}) =>(
   
    <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
        <Location city={city} className="locationCont"></Location>
           {data?
                <WeatherData data={data}></WeatherData> :
                <CircularProgress></CircularProgress>
            }
    </div>

)

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    })
}
export default WeatherLocation;