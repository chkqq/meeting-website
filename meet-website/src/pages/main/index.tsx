import styles from './style.module.scss'
import Button from '../../ui/button'
import { useNavigate } from 'react-router-dom'

const MainPage: React.FC = () => {
    const navigate = useNavigate()

    return(
        <div className={styles.main_box}>
            <div className={styles.sign_in_or_sign_up}>
                <Button color='#333' type='contained' text='Войти' onClick={() => navigate('/sign-in')} />
                <p>Или</p>
                <Button color='#333' type='contained' text='Зарегистрироваться' onClick={() =>  navigate('/sign-up')} />
            </div>
        </div>
    )
}

export default MainPage