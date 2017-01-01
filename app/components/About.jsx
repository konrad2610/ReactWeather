var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a weather application build on React.</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - JavaScript framework.
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - API to search for weather data by city name.
        </li>
        <li>
          <a href='https://github.com/konrad2610/ReactWeather'>Repo</a> - Project repo.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
