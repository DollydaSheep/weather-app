import React from 'react'
import CardContainer from './CardContainer'
import weatherCodeMap from './WeatherPatterns/WeatherCode'

const Hero = ({temperature, rainChance, displayName, weatherCode}) => {
  return (
    <CardContainer height={"h-32/90"} width={"w-full"} bgColor={""}>
        <h1 className='ml-4 text-5xl'>{displayName ? displayName : "City"}</h1>
        <p className='text-gray-400 ml-4'>Chance of Rain: {rainChance ? rainChance : 0}%</p>
        <h1 className='mt-36 ml-4 text-8xl font-bold'>{temperature ? temperature.toFixed(0) : 0}°</h1>
        {weatherCode && (
          <img className='absolute right-0 bottom-0 px-8 w-100' src={weatherCodeMap[weatherCode].image} alt="" />
        )}
    </CardContainer>
  )
}

export default Hero