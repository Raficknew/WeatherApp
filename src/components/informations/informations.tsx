import styles from "./_informations.module.scss"
import Settings from "../settingsComp/settings";
import { useState } from "react"

interface InformationsProps {
  onChangeCity: (city: string) => void,
  Units: boolean,
  temperature: () => void,
  sky: boolean,
  skyies: () => void,
}


const Informations: React.FC <InformationsProps> = (props) => {

  const [city, setCity] = useState('')
  const [isShown, setIsShown] = useState(true)

  const shown = () => {
    setIsShown(!isShown)
  }


  const changeCity = () => {
    if(city !== ''){
      props.onChangeCity(city)
      setCity('')
     } else {
      alert("Proszę podać nazwę miasta")
    }
  }

return (
    <div className={styles.informations}>
          {isShown && (
          <div className={styles.inputinfo}>
            <input 
            type="text"  
            placeholder='Enter the City Name...'
            value={city}
            onChange={(event) => {
              setCity(event.target.value)
            }}
            required
            />
            <button 
            onClick={changeCity}
            >
              Search
            </button>
          </div>
          )}
          <Settings 
            onClick = {shown}
          />
          {!isShown && (
          <div className={styles.changer}>
            <p onClick={props.temperature}>
              Units: 
              {props.Units ? "°F" :
              "°C"}</p>
            <p onClick={props.skyies}>
              Layout:   
              {props.sky ? "secondary" : "base"}</p>
          </div>
          )}
    </div>
  )
}

export default Informations;