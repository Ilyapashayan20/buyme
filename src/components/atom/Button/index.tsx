import type { FC } from 'react'
import classNames from 'classnames'

import type { TButtonProps } from './type'
import styles from './Button.module.scss'

const Button: FC<TButtonProps> = ({ className, onClick, children }) => (
  <button onClick={onClick} className={classNames(styles.wrapper, className)}>
    {children}
  </button>
)

export default Button
