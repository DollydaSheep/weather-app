import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import SearchBar from './Components/SearchBar'
import Hero from './Components/Hero'
import CardContainer from './Components/CardContainer'
import TodayForecast from './Components/TodayForecast'
import WeatherDetails from './Components/WeatherDetails'
import WeekForecast from './Components/WeekForecast'

function App() {
  
  useEffect(()=>{
    const fetchWeather = async () =>{
      try{
        const res = await fetch('http://localhost:3000/weather?lat=52.52&long=13.41');

        const data = await res.json();

        console.log(data);
      }catch(err){
        console.error(err);
      }
    }
    fetchWeather();
  },[])

  return (
    <>
      <div className='flex w-screen h-screen p-0'>
        <Sidebar />
        <section className='w-5/9'>
          <SearchBar />
          <Hero />
          <TodayForecast />
          <WeatherDetails />
        </section>
        <div className='m-4'></div>
        <WeekForecast />
      </div>
      
    </>
  )
}

export default App
