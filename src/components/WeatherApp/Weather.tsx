import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '@/types/weather';
import { WeatherWrapper } from './weather.styles';

interface WeatherProps {
  apiKey: string;
  city: string;
}

const Weather: React.FC<WeatherProps> = ({ apiKey, city }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchWeather();
  }, [apiKey, city]);

  return (
    <WeatherWrapper>
      {weather ? (
        <div>
          <h2>{weather.name}, <span>{weather.sys.country}</span></h2>
          <p>{weather.weather[0].description}</p>
          <p><span>Temperature:</span> {weather.main.temp} °C</p>
          <p><span>Humidity:</span> {weather.main.humidity}%</p>
          <p><span>Wind Speed:</span> {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </WeatherWrapper>
  );
};

export default Weather;
