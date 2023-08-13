import styles from "./nextDays.module.scss"
import Day from "./days/days";

interface NextDaysProps {
    icon: string,
    celsius: number,
    farenheit: number;
    Units: boolean;
    
}

const NextDays: React.FC<NextDaysProps> = (props) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const firstDay = new Date();

    const day = firstDay.getDate();
    const month = firstDay.getUTCMonth();
    const year = firstDay.getUTCFullYear();

    const currentday = `${day}-${month}-${year}`

    console.log(currentday)
    

    return (
        <div className={styles.content}>
            <Day 
                day={weekday[((firstDay.getDay() + 1) % 7)]}
                icon={props.icon}
                temp={props.Units ? 
                    props.celsius + "°C":
                    props.farenheit + "°F"}
            />
            <Day 
                day={weekday[((firstDay.getDay() + 2) % 7)]}
                icon={props.icon}
                temp={props.Units ? 
                    props.celsius + "°C":
                    props.farenheit + "°F"}
            />
            <Day 
                day={weekday[((firstDay.getDay() + 3) % 7)]}
                icon={props.icon}
                temp={props.Units ? 
                    props.celsius + "°C":
                    props.farenheit + "°F"}
            />
            <Day 
                day={weekday[((firstDay.getDay() + 4) % 7)]}
                icon={props.icon}
                temp={props.Units ? 
                    props.celsius + "°C":
                    props.farenheit + "°F"}
            />
            <Day 
                day={weekday[((firstDay.getDay() + 5) % 7)]}
                icon={props.icon}
                temp={props.Units ? 
                    props.celsius + "°C":
                    props.farenheit + "°F"}
            />
        </div>
    )
}

export default NextDays;