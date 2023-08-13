import styles from "./_settings.module.scss"
import { IoSettingsOutline } from 'react-icons/io5';

interface SettingsProps {
  onClick: () => void, 
}


const Settings: React.FC<SettingsProps> = (props) => {
  return (
    <div 
      className={styles.main}
      onClick={props.onClick}
    >
      <span>
        <IoSettingsOutline 
        className={styles.seticon}
        />
      </span>
    </div>
  )
}

export default Settings;