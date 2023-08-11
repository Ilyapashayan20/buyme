import { FC, useState } from 'react';
import styles from './Input.module.scss';
import { TAuthInputProps } from './type';

const InputAuth: FC<TAuthInputProps> = ({ label, placeholder, type, validate }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setError(null);
  };

  const handleBlur = () => {
    if (validate) {
      const validationError = validate(inputValue);
      setError(validationError);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.wrapper__label}>{label}</label>
      <input
        className={`${styles.wrapper__input} ${error ? styles.error : ''}`}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputAuth;
