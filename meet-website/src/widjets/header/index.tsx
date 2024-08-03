import styles from './style.module.scss'
import Button from '../../ui/button'
import { Link, useNavigate } from 'react-router-dom'
const Header: React.FC = () => {
    const navigate = useNavigate()

    const handleShoppingCartClick = () => {
        navigate('/cart')
    }

    return(
        <div className = {styles.header}>
        <Link to="/" className={styles.title}>=DATING=</Link>
        <div className= {styles.buttons}>
            <Button color='#333' type='text' text='Сообщения' onClick={() => navigate('/')} />
            <Button color='#333' type='text' text='Просмотр анкет' onClick={() => navigate('/people-choice')} />
            <Button color='#333' type='text' text='Мой аккаунт' onClick={() => navigate('/my-profile')} />
        </div>

    </div>
    )
}

export default Header