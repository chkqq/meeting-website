import styles from './style.module.scss'
import React, { useState } from 'react'
import Button from '../../ui/button'
import TextInput from '../../ui/inputText'

const SignInPage: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    }
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
    }
  
    return(
        <div className={styles.main_box}>
            <TextInput
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
            />
            <TextInput
                name="password"
                placeholder="пароль"
                value={formData.password}
                onChange={handleChange}
            />
            
        </div>
    )
}

export default SignInPage