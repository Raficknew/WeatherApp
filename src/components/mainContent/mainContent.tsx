import styles from "./_mainContent.module.scss"


interface MainContentProps {
  image: string,
  time: string,
  cityy: string,
  country: string,
  condition: string,
  celsius: number,
  farenheit: number;
  Units: boolean;
}


const MainContent: React.FC<MainContentProps> = (props) => {


  return (
    <div className={styles.content}>
            <div className={styles.icon}>
              <img src={props.image} alt="icon" />
            </div>
            <div className={styles.maininf}>
              <p className={styles.day}>
                Today
              </p>
              <p className={styles.localtime}>
                {props.time}
              </p>
              <p className={styles.city}>
                {props.cityy}
              </p>
              <p className={styles.country}>
                {props.country}
                </p>
              <span className={styles.situation}>
                <p
                  className={styles.temperature}>
                  {props.Units ? 
                    props.celsius + "°C" :
                    props.farenheit + "°F"}
                </p>
                <p className={styles.condition}>
                  {props.condition}
                </p>
              </span>
            </div>
          </div>
  )
}

export default MainContent;