import React from 'react'
import CardContainer from './CardContainer'
import WeekForecastCard from './WeekForecastCard'

const WeekForecast = ({weatherData}) => {
  return (
    <CardContainer height={'h-[calc(h-full - m-4)]'} width={'w-2/5'} bgColor={'bg-gray-600'}>
      <h1 className='p-4'>7-Day Forecast</h1>
      <div className='flex flex-col justify-center content-evenly h-9/10 divide-y divide-gray-500'>
        <WeekForecastCard maxTemp={weatherData ? weatherData.temperature2mMax[0].toFixed(0) + "°" : "NaN"} minTemp={weatherData ? weatherData.temperature2mMin[0].toFixed(0) + "°" : "NaN"}/>
        <WeekForecastCard maxTemp={weatherData ? weatherData.temperature2mMax[1].toFixed(0) + "°" : "NaN"} minTemp={weatherData ? weatherData.temperature2mMin[1].toFixed(0) + "°" : "NaN"}/>
        <WeekForecastCard maxTemp={weatherData ? weatherData.temperature2mMax[2].toFixed(0) + "°" : "NaN"} minTemp={weatherData ? weatherData.temperature2mMin[2].toFixed(0) + "°" : "NaN"}/>
        <WeekForecastCard maxTemp={weatherData ? weatherData.temperature2mMax[3].toFixed(0) + "°" : "NaN"} minTemp={weatherData ? weatherData.temperature2mMin[3].toFixed(0) + "°" : "NaN"}/>
        <WeekForecastCard maxTemp={weatherData ? weatherData.temperature2mMax[4].toFixed(0) + "°" : "NaN"} minTemp={weatherData ? weatherData.temperature2mMin[4].toFixed(0) + "°" : "NaN"}/>
        <WeekForecastCard maxTemp={weatherData ? weatherData.temperature2mMax[5].toFixed(0) + "°" : "NaN"} minTemp={weatherData ? weatherData.temperature2mMin[5].toFixed(0) + "°" : "NaN"}/>
        <WeekForecastCard maxTemp={weatherData ? weatherData.temperature2mMax[6].toFixed(0) + "°" : "NaN"} minTemp={weatherData ? weatherData.temperature2mMin[6].toFixed(0) + "°" : "NaN"}/>
      </div>
    </CardContainer>
  )
}

export default WeekForecast