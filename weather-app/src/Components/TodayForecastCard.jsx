import React from 'react'

const TodayForecastCard = () => {
  return (
    <div className={`flex flex-col items-center grow`}>
      <p className='text-gray-400'>6:00 AM</p>
      <div className='p-12'></div>
      <h1 className='text-2xl font-bold'>36°</h1>
    </div>
  )
}

export default TodayForecastCard