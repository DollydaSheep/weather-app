import React from 'react'
import CardContainer from './CardContainer'
import WeekForecastCard from './WeekForecastCard'

const WeekForecast = ({weatherData}) => {

  let maxTemp;
  let minTemp;
  let weatherCode;

  if(weatherData){
    ({temperature2mMax: maxTemp, temperature2mMin: minTemp, weatherCode} = weatherData);
  }

  console.log(weatherData)

  if(!weatherData){
    return(
      <>
        <CardContainer height={'h-[calc(h-full - m-4)]'} width={'w-2/5'} bgColor={'bg-gray-600'}>

        </CardContainer>
      </>
    )
  }

  return (
    <CardContainer height={'h-[calc(h-full - m-4)]'} width={'w-2/5'} bgColor={'bg-gray-600'}>
      <h1 className='p-4'>7-Day Forecast</h1>
      <div className='flex flex-col justify-center content-evenly h-9/10 divide-y divide-gray-500'>
        <WeekForecastCard maxTemp={maxTemp ? maxTemp[0].toFixed(0) + "°" : "NaN"} minTemp={minTemp ? minTemp[0].toFixed(0) + "°" : "NaN"} weatherCode={weatherCode ? Number(weatherCode[0]) : ""}/>
        <WeekForecastCard maxTemp={maxTemp ? maxTemp[1].toFixed(0) + "°" : "NaN"} minTemp={minTemp ? minTemp[1].toFixed(0) + "°" : "NaN"} weatherCode={weatherCode ? Number(weatherCode[1]) : ""}/>
        <WeekForecastCard maxTemp={maxTemp ? maxTemp[2].toFixed(0) + "°" : "NaN"} minTemp={minTemp ? minTemp[2].toFixed(0) + "°" : "NaN"} weatherCode={weatherCode ? Number(weatherCode[2]) : ""}/>
        <WeekForecastCard maxTemp={maxTemp ? maxTemp[3].toFixed(0) + "°" : "NaN"} minTemp={minTemp ? minTemp[3].toFixed(0) + "°" : "NaN"} weatherCode={weatherCode ? Number(weatherCode[3]) : ""}/>
        <WeekForecastCard maxTemp={maxTemp ? maxTemp[4].toFixed(0) + "°" : "NaN"} minTemp={minTemp ? minTemp[4].toFixed(0) + "°" : "NaN"} weatherCode={weatherCode ? Number(weatherCode[4]) : ""}/>
        <WeekForecastCard maxTemp={maxTemp ? maxTemp[5].toFixed(0) + "°" : "NaN"} minTemp={minTemp ? minTemp[5].toFixed(0) + "°" : "NaN"} weatherCode={weatherCode ? Number(weatherCode[5]) : ""}/>
        <WeekForecastCard maxTemp={maxTemp ? maxTemp[6].toFixed(0) + "°" : "NaN"} minTemp={minTemp ? minTemp[6].toFixed(0) + "°" : "NaN"} weatherCode={weatherCode ? Number(weatherCode[6]) : ""}/>
      </div>
    </CardContainer>
  )
}

export default WeekForecast