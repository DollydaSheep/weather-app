import React from 'react'
import CardContainer from './CardContainer'

const Hero = () => {
  return (
    <CardContainer height={"h-32/90"} width={"w-full"} bgColor={""}>
        <h1 className='ml-4 text-5xl'>HELLO</h1>
        <p className='text-gray-400 ml-4'>Chance of Rain: 10%</p>
        <h1 className='mt-36 ml-4 text-8xl font-bold'>37°</h1>
    </CardContainer>
  )
}

export default Hero