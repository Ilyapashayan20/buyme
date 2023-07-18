import type { FC } from 'react'
import classNames from 'classnames'

import type { TButtonProps } from './type'
import styles from './Button.module.scss'

const Button: FC<TButtonProps> = ({ className, onClick, children, LeftIcon, isTransparent = false }) => (
  <button
    onClick={onClick}
    className={classNames(styles.wrapper, className, { [styles.wrapper__transparent]: isTransparent })}
  >
    {LeftIcon ? <LeftIcon /> : null}

    {children}
  </button>
)

export default Button
