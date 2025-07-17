import React from 'react'
import CardContainer from './CardContainer'
import TodayForecastCard from './TodayForecastCard'

const TodayForecast = ({weatherData, daySelected}) => {

  const day = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

  return (
    <CardContainer width={'w-full'} height={'h-1/4'} bgColor={'bg-gray-600'}>
      <h1 className='p-4'>{new Date().getDay() === new Date(weatherData.time[(24 * daySelected) + 0]).getDay() ? "Today" : day[new Date(weatherData.time[(24 * daySelected) + 0]).getDay()]}'s Forecast</h1>
      <div className='flex justify-evenly w-full divide-x divide-gray-500'>
        <TodayForecastCard time={"6:00 AM"} temp={weatherData ? weatherData.temperature2m[(24 * daySelected) + 6].toFixed(0) + "°" : "NaN"} weatherCode={weatherData ? weatherData.weatherCode[6] : ""}/>
        <TodayForecastCard time={"9:00 AM"} temp={weatherData ? weatherData.temperature2m[(24 * daySelected) + 9].toFixed(0) + "°" : "NaN"} weatherCode={weatherData ? weatherData.weatherCode[9] : ""}/>
        <TodayForecastCard time={"12:00 PM"} temp={weatherData ? weatherData.temperature2m[(24 * daySelected) + 12].toFixed(0) + "°" : "NaN"} weatherCode={weatherData ? weatherData.weatherCode[12] : ""}/>
        <TodayForecastCard time={"3:00 PM"} temp={weatherData ? weatherData.temperature2m[(24 * daySelected) + 15].toFixed(0) + "°" : "NaN"} weatherCode={weatherData ? weatherData.weatherCode[15] : ""}/>
        <TodayForecastCard time={"6:00 PM"} temp={weatherData ? weatherData.temperature2m[(24 * daySelected) + 18].toFixed(0) + "°" : "NaN"} weatherCode={weatherData ? weatherData.weatherCode[18] : ""}/>
        <TodayForecastCard time={"9:00 PM"} temp={weatherData ? weatherData.temperature2m[(24 * daySelected) + 21].toFixed(0) + "°" : "NaN"} weatherCode={weatherData ? weatherData.weatherCode[21] : ""}/>
      </div>
    </CardContainer>
  )
}

export default TodayForecast