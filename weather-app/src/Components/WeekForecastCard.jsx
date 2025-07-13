import React from 'react'
import weatherCodeMap from './WeatherPatterns/WeatherCode'

const WeekForecastCard = ({maxTemp, minTemp, weatherCode}) => {

  return (
    <div className='grid grid-cols-3 justify-center justify-evenly items-center grow hover:bg-black/10 cursor-pointer group'>
        <p className='text-gray-400 m-auto'>Today</p>
        <span className='flex items-center'>
          {weatherCode && (
            <img className='p-4 w-18 group-hover:scale-125 transition duration-200' src={weatherCodeMap[weatherCode].image} alt="" />
          )}
          <p>{weatherCodeMap ? weatherCodeMap[weatherCode].label : "Unknown"}</p>
        </span>
        <p className='m-auto'>{maxTemp}<span className='text-gray-400'>/{minTemp}</span></p>
    </div>
  )
}

export default WeekForecastCard