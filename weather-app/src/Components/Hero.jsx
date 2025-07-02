import React from 'react'
import CardContainer from './CardContainer'

const Hero = ({temperature, rainChance}) => {
  return (
    <CardContainer height={"h-32/90"} width={"w-full"} bgColor={""}>
        <h1 className='ml-4 text-5xl'>HELLO</h1>
        <p className='text-gray-400 ml-4'>Chance of Rain: {rainChance ? rainChance : 0}%</p>
        <h1 className='mt-36 ml-4 text-8xl font-bold'>{temperature ? temperature.toFixed(0) : 0}°</h1>
    </CardContainer>
  )
}

export default Hero