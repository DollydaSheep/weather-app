import React from 'react'
import weatherCodeMap from './WeatherPatterns/WeatherCode'

const TodayForecastCard = ({time, temp, weatherCode}) => {
  return (
    <div className={`flex flex-col items-center grow hover:bg-black/10 cursor-pointer py-2 group `}>
      <p className='text-gray-400'>{time}</p>
      {weatherCode ? 
      (<img className='p-6 w-24 group-hover:scale-125 transition duration-200' src={weatherCode ? weatherCodeMap[weatherCode].image : ""} alt="" />)
      : <div className='p-12'></div>}
      <h1 className='text-2xl font-bold'>{temp}</h1>
    </div>
  )
}

export default TodayForecastCard