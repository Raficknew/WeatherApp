import styles from './App.module.scss'
import { useEffect,useState } from 'react'


import Informations from './components/informations/informations'
import MainContent from './components/mainContent/mainContent'
import NextDays from './components/nextDays/nextDays'


type WeatherData = {
  location: {
    name: string,
    country: string,
    localtime: string;
  },
  current: {
    temp_c: number,
    temp_f: number,
    condition: {
      text: string,
      icon: string,
    },
  },
}

function App() {
  const [currentCity, setCurrentCity] = useState('New York')
  const [Weatherdata, setWeatherData] = useState<WeatherData | null>(null)
  const [units, setUnits] = useState(true)
  const [background, setBackground] = useState(true)

  

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

 
  

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentCity}&days=5&aqi=no&alerts=no`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Nie znaleziono miasta.')
        }
        return response.json()
      })
      .then(data => setWeatherData(data))
      .catch(error => {
        alert(error.message)
      })
  }, [currentCity, apiKey])

  const temperature = () => {
    setUnits(!units)
  }

  const back = () => {
    setBackground(!background)
  }
  
  
  return (
    <>
      <div className={background ? 
        styles.App : 
        styles.App2}
        >
        <Informations 
          onChangeCity = {(city) => {
            setCurrentCity(city)
          }}
          Units = {units}
          temperature= {temperature}
          sky = {background}
          skyies = {back}
        />
        {Weatherdata && (
          <MainContent 
            image = {Weatherdata.current.condition.icon.replace('64x64', '128x128')}
            time = {Weatherdata.location.localtime}
            cityy = {Weatherdata.location.name}
            country = {Weatherdata.location.country}
            condition = {Weatherdata.current.condition.text}
            celsius = {Weatherdata.current.temp_c } 
            farenheit = {Weatherdata.current.temp_f}
            Units = {units}
          />    
        )
        }
        {Weatherdata && (
          <NextDays 
            icon={Weatherdata.current.condition.icon.replace('64x64', '128x128')}
            celsius = {Weatherdata.current.temp_c } 
            farenheit = {Weatherdata.current.temp_f}
            Units = {units}
          />
        )}

      </div>
    </>
  )
}

export default App
