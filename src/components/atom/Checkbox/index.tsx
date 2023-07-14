import type { FC } from 'react'
import type { CheckboxProps } from './type'
import styles from './Checkbox.module.scss'

const Checkbox: FC<CheckboxProps> = ({ title }) => (
  <div className={styles.wrapper}>
    <input className={styles.checkbox} type='checkbox' checked  />
    <span className={styles.checkbox__title}>{title}</span>
  </div>
)

export default Checkbox
