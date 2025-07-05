import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import SearchBar from './Components/SearchBar'
import Hero from './Components/Hero'
import CardContainer from './Components/CardContainer'
import TodayForecast from './Components/TodayForecast'
import WeatherDetails from './Components/WeatherDetails'
import WeekForecast from './Components/WeekForecast'
import { useRef } from 'react'

function App() {

  const[weatherData,setWeatherData] = useState();
  const[searchResults,setSearchResults] = useState();
  const[latLong,setLatLong] = useState();
  const[displayName,setDisplayName] = useState();

  const handleSearchResultClick = (searchName,lat,lon) => {
    setSearchResults(null);
    setLatLong([lat,lon]);
    setDisplayName(searchName);
  }
  
  const handleSearchValue = async (e) => {
    if(e.key == 'Enter'){
      try{
        const res = await fetch(`http://localhost:3000/searchresult?value=${e.target.value}`);

        const data = await res.json();

        setSearchResults(data);

        console.log(data);
      }catch(err){
        console.error(err);
      }
    }
  }
  
  useEffect(()=>{
    const fetchWeather = async () =>{
      try{
        let res
        if(latLong){
          res = await fetch(`http://localhost:3000/weather?lat=${latLong[0]}&long=${latLong[1]}`);
        }else{
          res = await fetch(`http://localhost:3000/weather?lat=52.52&long=13.41`);
        }
        

        const data = await res.json()

        setWeatherData(data);
        console.log(data);
      }catch(err){
        console.error(err);
      }
    }
    fetchWeather();
  },[latLong])

  if(!weatherData){
    return(
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

  return (
    <>
      <div className='flex w-screen h-screen p-0'>
        <Sidebar />
        <section className='w-5/9'>
          <SearchBar handleSearchValue={handleSearchValue} searchResults={searchResults} onOutsideClick={()=>setSearchResults(null)} handleSearchResultClick={handleSearchResultClick}/>
          <Hero temperature={weatherData.data.current.temperature2m} rainChance={weatherData.data.current.precipitation} displayName={displayName}/>
          
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
