import styles from './style.module.scss'
import React, { useState } from 'react'
import Button from '../../ui/button'
import TextInput from '../../ui/inputText'
import { useNavigate } from 'react-router-dom'

const SignInPage: React.FC = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      navigate('/profile-editor')
    }

    return(
        <div className={styles.main_box}>
            <div className={styles.auth_form}>
                <h1>Вход</h1>
                <TextInput
                    type='text'
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextInput
                    type='password'
                    name="password"
                    placeholder="пароль"
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className={styles.button_box}>
                    <Button color='#333' type='contained' text='Назад' onClick={() => navigate('/')} />
                    <Button color='#333' type='contained' text='Войти' onClick={() => (handleSubmit)} />
                </div>
            </div>
        </div>
    )
}

export default SignInPage