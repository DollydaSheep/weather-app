import React from 'react'
import CardContainer from './CardContainer'
import TodayForecastCard from './TodayForecastCard'

const TodayForecast = ({weatherData}) => {
  return (
    <CardContainer width={'w-full'} height={'h-1/4'} bgColor={'bg-gray-600'}>
      <h1 className='p-4'>Today's Forecast</h1>
      <div className='flex justify-evenly w-full divide-x divide-gray-500'>
        <TodayForecastCard time={"6:00 AM"} temp={weatherData ? weatherData.temperature2m[6].toFixed(0) + "°" : "NaN"}/>
        <TodayForecastCard time={"9:00 AM"} temp={weatherData ? weatherData.temperature2m[9].toFixed(0) + "°" : "NaN"}/>
        <TodayForecastCard time={"12:00 PM"} temp={weatherData ? weatherData.temperature2m[12].toFixed(0) + "°" : "NaN"}/>
        <TodayForecastCard time={"3:00 PM"} temp={weatherData ? weatherData.temperature2m[15].toFixed(0) + "°" : "NaN"}/>
        <TodayForecastCard time={"6:00 PM"} temp={weatherData ? weatherData.temperature2m[18].toFixed(0) + "°" : "NaN"}/>
        <TodayForecastCard time={"9:00 PM"} temp={weatherData ? weatherData.temperature2m[21].toFixed(0) + "°" : "NaN"}/>
      </div>
    </CardContainer>
  )
}

export default TodayForecast