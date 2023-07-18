import { type FC, useMemo } from 'react'
import classNames from 'classnames'

import { StarIcon } from 'assets'

import type { TRate } from './types'
import styles from './RatingStars.module.scss'

const RatingStars: FC<TRate> = ({ rate, className, isRed = false }) => {
  const starIconsArr = new Array(5).fill('')

  const renderStars = useMemo(
    () =>
      starIconsArr.map((_, index) => (
        <StarIcon
          key={index}
          className={classNames({
            [styles.wrapper__active]: !isRed && index < rate,
            [styles.wrapper__red__active]: isRed && index < rate,
          })}
        />
      )),
    [isRed, rate, starIconsArr]
  )

  return <div className={classNames(styles.wrapper, className, { [styles.wrapper__red]: isRed })}>{renderStars}</div>
}

export default RatingStars
