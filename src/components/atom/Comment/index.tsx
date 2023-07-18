import type { FC } from 'react'

import { useResponsive } from 'hooks'
import { RatingStars } from 'components'

import type { TCommentProps } from './types'
import styles from './Comment.module.scss'

const Comment: FC<TCommentProps> = ({ name, date, rate, text }) => {
  const { isTablet } = useResponsive()

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__head}>
        <p className={styles.wrapper__head__title}>{name}</p>

        <p className={styles.wrapper__head__date}>{date}</p>
      </div>

      <RatingStars isRed={isTablet} rate={rate} />

      <p className={styles.wrapper__text}>{text}</p>
    </div>
  )
}

export default Comment
