import React from 'react'
import styles from './style.module.scss'

interface TextInputProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <input
      className={styles.text_input}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput
