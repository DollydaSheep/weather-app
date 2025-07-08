import React from 'react'

const TodayForecastCard = ({time, temp}) => {
  return (
    <div className={`flex flex-col items-center grow`}>
      <p className='text-gray-400'>{time}</p>
      <div className='p-12'></div>
      <h1 className='text-2xl font-bold'>{temp}</h1>
    </div>
  )
}

export default TodayForecastCard