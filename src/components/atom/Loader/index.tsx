import { FC } from 'react'
import classNames from 'classnames'

import { TLoader } from './types'

import styles from './Loader.module.scss'

const Loader: FC<TLoader> = ({ className }) => {
  const emptyArray = new Array(4).fill('')
  const renderEmptyBlocks = emptyArray.map((_, idx) => <div key={idx} />)

  return <div className={classNames(styles.wrapper, className)}>{renderEmptyBlocks}</div>
}

export default Loader
