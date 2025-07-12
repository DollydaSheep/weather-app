const express = require('express');
const cors = require('cors')
const {fetchWeatherApi} = require('openmeteo');


const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

let todo = [];

app.get('/weather',async (req,res)=>{

    const lat = req.query.lat;
    const long = req.query.long;

    const params = {
        "latitude": lat,
        "longitude": long,
        "daily": ["precipitation_probability_max", "weather_code", "temperature_2m_max", "temperature_2m_min"],
        "hourly": ["temperature_2m", "precipitation_probability", "weather_code"],
        "current": ["temperature_2m", "precipitation", "weather_code"],
        "timezone": "Asia/Singapore"
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current();
    const hourly = response.hourly();
    const daily = response.daily();

    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0).value(),
            precipitation: current.variables(1).value(),
            weatherCode: current.variables(2).value()
        },
        hourly: {
            time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
            ),
            temperature2m: hourly.variables(0).valuesArray(),
            precipitationProbability: hourly.variables(1).valuesArray(),
            weatherCode: hourly.variables(2).valuesArray(),
        },
        daily: {
            time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
                (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
            ),
            precipitationProbabilityMax: daily.variables(0).valuesArray(),
            weatherCode: daily.variables(1).valuesArray(),
            temperature2mMax: daily.variables(2).valuesArray(),
            temperature2mMin: daily.variables(3).valuesArray(),
        },
    };

    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.hourly.time.length; i++) {
        console.log(
            weatherData.hourly.time[i].toISOString(),
            weatherData.hourly.temperature2m[i],
            weatherData.hourly.precipitationProbability[i]
        );
    }
    for (let i = 0; i < weatherData.daily.time.length; i++) {
        console.log(
            weatherData.daily.time[i].toISOString(),
            weatherData.daily.precipitationProbabilityMax[i],
            weatherData.daily.weatherCode[i],
            weatherData.daily.temperature2mMax[i],
            weatherData.daily.temperature2mMin[i]
        );
    }

    res.status(200).json({data: weatherData});
})

app.get('/searchresult', async (req,res)=>{

    const query = req.query.value

    console.log(req.query.value)
    try{
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&addressdetails=1`)
        
        const data = await response.json()

        res.status(200).json(data);

        console.log(data);
    }catch(err){
        console.error(err)
    }
})



const server = app.listen(port,()=>{
    console.log("Port " + port + " is live!");
})