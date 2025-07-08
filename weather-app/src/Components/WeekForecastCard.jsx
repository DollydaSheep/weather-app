import React from 'react'

const WeekForecastCard = ({maxTemp, minTemp}) => {
  return (
    <div className='flex justify-evenly items-center grow'>
        <p className='text-gray-400'>Today</p>
        <p>Sunny</p>
        <p>{maxTemp}<span className='text-gray-400'>/{minTemp}</span></p>
    </div>
  )
}

export default WeekForecastCard