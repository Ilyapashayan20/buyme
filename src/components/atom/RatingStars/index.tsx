import { type FC, useMemo } from 'react'
import classNames from 'classnames'

import { StarIcon } from 'assets'

import type { TRate } from './types'
import styles from './RatingStars.module.scss'

const RatingStars: FC<TRate> = ({ rate, className }) => {
  const starIconsArr = new Array(5).fill('')

  const renderStars = useMemo(
    () =>
      starIconsArr.map((_, index) => (
        <StarIcon key={index} className={classNames({ [styles.wrapper__active]: index < rate })} />
      )),
    [rate, starIconsArr]
  )

  return <div className={classNames(styles.wrapper, className)}>{renderStars}</div>
}

export default RatingStars
