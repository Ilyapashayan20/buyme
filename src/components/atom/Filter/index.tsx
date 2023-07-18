import { useState, type FC } from 'react'
import styles from './Filter.module.scss'
import { TFilterProps } from './type'
import { ChervonDownIcon } from 'assets'
import Checkbox from '../Checkbox'

const Filter: FC<TFilterProps> = ({ title, items, warehouse }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={handleOpenClick} className={styles.wrapper__title}>
        <h1>{title}</h1>
        <button style={isOpen ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg' }}>
          <ChervonDownIcon />
        </button>
      </div>
      {isOpen && items && (
        <div className={styles.wrapper__container}>
          {warehouse && (
            <div className={styles.wrapper__container__warehouse}>
              <p className={styles.wrapper__container__warehouse__title}>Оберіть склад</p>
              <div className={styles.wrapper__container__warehouse__container}>
                <div className={styles.wrapper__container__warehouse__item}>
                  <div className={styles.wrapper__container__warehouse__item__radio}>
                    {' '}
                    <input type='radio' />
                  </div>{' '}
                  Основний
                </div>
                <div className={styles.wrapper__container__warehouse__item}>
                  <div className={styles.wrapper__container__warehouse__item__radio}>
                    {' '}
                    <input type='radio' />
                  </div>{' '}
                  Додатковий
                </div>
              </div>
            </div>
          )}
          {items.map((item, index) => (
            <div className={styles.wrapper__container__item} key={index}>
              <Checkbox />
              <p className={styles.wrapper__container__item__title}>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Filter
