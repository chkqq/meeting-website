import React, { useState } from 'react';
import styles from './style.module.scss';

interface InputProps {
  type: 'text' | 'password';
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;
  const inputClass = type === 'password' ? `${styles.input} ${styles.input_with_toggle}` : styles.input;

  return (
    <div className={styles.input_container}>
      <input
        className={inputClass}
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <button
          type="button"
          className={styles.toggle_button}
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? '🙈' : '👁️'}
        </button>
      )}
    </div>
  );
};

export default Input;
