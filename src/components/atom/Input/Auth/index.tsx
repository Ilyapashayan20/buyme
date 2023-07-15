import type { FC } from 'react'

import type { TAuthInputProps } from './type'
import styles from './Input.module.scss'

const InputAuth: FC<TAuthInputProps> = ({ label, placeholder, type }) => (
  <div className={styles.wrapper}>
    <label className={styles.wrapper__lable}>{label}</label>

    <input className={styles.wrapper__input} type={type} placeholder={placeholder} />
  </div>
)

export default InputAuth
