import React from 'react';
import Weather from './Weather';

const WeatherApp = () => {
  const apiKey = '89116119cedb6d016c96e3ecccf65475';
  const city = 'Cairo';

  return (
    <div>
      <Weather apiKey={apiKey} city={city} />
    </div>
  );
};

export default WeatherApp;
