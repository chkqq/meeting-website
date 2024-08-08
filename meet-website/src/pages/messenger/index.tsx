import styles from './style.module.scss'
import Header from '../../widjets/header'
import ChatsTape from '../../widjets/ChatsTape'
const MessengerPage: React.FC = () => {
    return (
        <div>
            <Header />
            <ChatsTape />
        </div>
    )

}

export default MessengerPage;