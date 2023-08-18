import { type FC, useState, useCallback } from 'react'

import { HeartIcon, HeartIcon1 } from 'assets'
import { Button, RatingStars } from 'components'

import type { TCardProps } from './types'
import styles from './Card.module.scss'
import { useResponsive } from 'hooks'
import { useAppDispatch } from 'hooks/useTypedSelector'
import { addWatchList, removeWatchList } from 'store/features/Watchlist/watchListSlice'

const Card: FC<TCardProps> = ({
  id,
  image,
  title,
  rate,
  reviwers,
  price,
  promotion,
  oldPrice,
  isCheck = false,
  saved,
}) => {
  const { isTablet } = useResponsive()

  const dispatch = useAppDispatch()
  const [isLiked, setLiked] = useState(saved)

  const onLikeClickCallback = useCallback((event: any) => {
    event.preventDefault();
    const updatedIsLiked = !isLiked;
    setLiked(updatedIsLiked);

    if (updatedIsLiked === true) {
      dispatch(addWatchList(id));
      console.log('like');
    } else {
      console.log('unlike');
      dispatch(removeWatchList(id));
    }
  }, [isLiked]);

  const renderHeartIcon = isLiked ? (
    <HeartIcon role='button' onClick={onLikeClickCallback} className={styles.wrapper__like} />
  ) : (
    <HeartIcon1 role='button' onClick={onLikeClickCallback} className={styles.wrapper__like} />
  )

  const renderCheckedIcon = <button></button>

  return (
    <div className={styles.wrapper}>
        <a className={styles.wrapper}  href={`/product/${id}`}>

      <img className={styles.wrapper__image} src={image} alt={title} width='100%' height='auto' />

      {!isCheck ? !isTablet && renderHeartIcon : renderCheckedIcon}

        <div className={styles.wrapper__description}>
          {!!promotion ? (
            <div className={styles.wrapper__new}>{promotion} %</div>
          ) : (
            <div className={styles.wrapper__new}>Новинки</div>
          )}

          <p className={styles.wrapper__title}>{title}</p>

          <div className={styles.wrapper__rating}>
            <RatingStars rate={rate} />

            <p className={styles.wrapper__reviewers}>{reviwers} відгуків</p>
          </div>

          {!promotion ? (
            <p className={styles.wrapper__price}>{price} / дроп ціна</p>
          ) : (
            <p className={styles.wrapper__price__promotion}>
              {price} <span className={styles.wrapper__price__old}>{oldPrice}</span>
            </p>
          )}

          {isTablet && (
            <div className={styles.wrapper__buy}>
              <Button className={styles.wrapper__buy__button}>Купити</Button>

              {renderHeartIcon}
            </div>
          )}
        </div>
      </a>
    </div>
  )
}

export default Card
