import type { FC } from 'react'

import type { TCheckboxProps } from './type'
import styles from './Checkbox.module.scss'

const Checkbox: FC<TCheckboxProps> = ({ title,checked }) => (
  <div className={styles.wrapper}>
    <input checked={checked} className={styles.checkbox} type='checkbox'  />

    <span className={styles.checkbox__title}>{title}</span>
  </div>
)

export default Checkbox
