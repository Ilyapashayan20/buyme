import type { FC } from 'react'

import styles from './EconomYourTime.module.scss'
import { economData } from './utils'

const EconomYourTime: FC = () => {
  const renderItems = economData.map((element, index) => (
    <div key={index} className={styles.wrapper__footer__item}>
      <h4 className={styles.wrapper__footer__item__title}>{element.title}</h4>

      <p className={styles.wrapper__footer__item__subtitle}>{element.subtitle}</p>
    </div>
  ))

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__description}>
          <h3 className={styles.wrapper__container__description__title}>Економ свій час! Замовляй з BuyMe! </h3>

          <p className={styles.wrapper__container__description__subtitle}>
            Ми — інтернет-магазин, де ти знайдеш все, що тобі потрібно: від жіночих туфельок до бронежилета, від
            гаджетів до газонокосарок і садової мебелі. Щодня тут відбувається понад 5 тисяч покупок.
            <br />
            <br />
            Купити одяг, взуття, аксесуари, чи товари для дому з BuyMe можна швидко і легко. Пропонуємо зручний варіант
            покупок — через мобільний додаток. Його можна завантажити і встановити на будь-який смартфон, де в декілька
            кліків можна замовити будь-які доступні товари.
          </p>
        </div>

        <div className={styles.wrapper__container__image}>
          <img src='images/economTime/phones.png' alt='phones' width='580px' height='480px' />
        </div>
      </div>

      <div className={styles.wrapper__footer}>{renderItems}</div>
    </div>
  )
}

export default EconomYourTime
