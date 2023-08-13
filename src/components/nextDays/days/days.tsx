import styles from "./days.module.scss"


interface DayProps {
    day: string,
    icon: string,
    temp: string,
}


const Day: React.FC<DayProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.day}>{props.day}</p>
            <img src={props.icon}  alt="weather-icon" />
            <p className={styles.temperature}>{props.temp}</p>
        </div>
    )
}

export default Day;