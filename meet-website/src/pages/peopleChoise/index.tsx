import styles from './style.module.scss'
import Header from '../../widjets/header'
import SwipeDeck from '../../widjets/swipeDeck'
const PeopleChoisePage: React.FC = () => {

    return(
        <div className={styles.main_box}>
            <Header />
            <SwipeDeck />
        </div>
    )
}

export default PeopleChoisePage