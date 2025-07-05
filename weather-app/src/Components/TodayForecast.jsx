import React from 'react'
import CardContainer from './CardContainer'
import TodayForecastCard from './TodayForecastCard'

const TodayForecast = () => {
  return (
    <CardContainer width={'w-full'} height={'h-1/4'} bgColor={'bg-gray-600'}>
      <h1 className='p-4'>Today's Forecast</h1>
      <div className='flex justify-evenly w-full divide-x divide-gray-500'>
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
        <TodayForecastCard />
      </div>
    </CardContainer>
  )
}

export default TodayForecast