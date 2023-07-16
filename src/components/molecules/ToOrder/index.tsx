import type { FC } from 'react'
import styles from './ToOrder.module.scss'
import { Button } from 'components/atom'

const ToOrder: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__prices}>
        <div>
          <p>Вартість замовлення</p>
          <span>12 784 грн</span>
        </div>
        <div>
          <p>Вартість замовлення</p>
          <span>12 784 грн</span>
        </div>
        <div className={styles.wrapper__prices__footer}>
          <p>До оплати без доставки</p>
          <span>13 584 грн</span>
        </div>
      </div>
      <div className={styles.wrapper__buttons}>
        <Button>Оформити замовлення</Button>
        <Button className={styles.wrapper__buttons__btn_2}>Замовити в один клік</Button>
      </div>
    </div>
  )
}

export default ToOrder
