import styles from './style.module.scss'
import Button from '../../ui/button'
import { useNavigate } from 'react-router-dom'

const MainPage: React.FC = () => {
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate('/sign-in')
    }

    const handleSignUpClick = () => {
        navigate('/')
    }

    return(
        <div className={styles.main_box}>
            <div className={styles.sign_in_or_sign_up}>
                <Button color='#333' type='contained' text='Войти' onClick={handleSignInClick} />
                <p>Или</p>
                <Button color='#333' type='contained' text='Зарегистрироваться' onClick={handleSignUpClick} />
            </div>
        </div>
    )
}

export default MainPage