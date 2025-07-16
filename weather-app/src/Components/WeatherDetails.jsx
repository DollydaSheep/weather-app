import React from 'react'
import CardContainer from './CardContainer'
import WeatherLineChart from './WeatherLineChart'

const WeatherDetails = () => {
  return (
    <CardContainer width={'w-full'} height={'h-1/4'} bgColor={'bg-gray-600'}>
      <h1 className='p-4'>Weather</h1>
      <WeatherLineChart />
    </CardContainer>
  )
}

export default WeatherDetails