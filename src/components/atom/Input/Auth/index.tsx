import type { FC } from 'react'
import type { AuthInputProps } from './type'
import styles from './Input.module.scss'

const InputAuth: FC<AuthInputProps> = ({ lable, placeholder, type }) => (
  <div className={styles.wrapper}>
    <label className={styles.wrapper__lable}>{lable}</label>
    <input className={styles.wrapper__input} type={type} placeholder={placeholder} />
  </div>
)

export default InputAuth
