import { FC, useState } from 'react'
import styles from './ToOrder.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { Button, Modal } from 'components/atom'
import InputAuth from 'components/atom/Input/Auth'
import { PaintIcon } from 'assets'


const ToOrder: FC<any> = ({ data}) => {
  const location: any = useLocation()
  const isPlacing = location.pathname === '/placing'


  const [showOrder,setShowOrder] = useState(false)
const handleClose = ()=>{
  setShowOrder(false)
}

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__prices}>

        <div>
          <p>Вартість замовлення</p>
          <span>{data.total_format}</span>
        </div>
        <div className={styles.wrapper__prices__footer}>
          <p>До оплати без доставки</p>
          <span>{data.total_format}</span>
        </div>
      </div>
      <div className={styles.wrapper__buttons}>
        {isPlacing ? (
          <Button className={styles.wrapper__buttons__btn_1}>Замовити</Button>
        ) : (
          <>
            {' '}
            <Link to='/placing'>
              <Button>Оформити замовлення</Button>
            </Link>
            <Button onClick={()=>setShowOrder(true)} className={styles.wrapper__buttons__btn_2}>Замовити в один клік</Button>
          </>
        )}
      </div>

      { showOrder && (
      <Modal onClose={handleClose} icon={PaintIcon} >
                 <div className={styles.modal__login__confirm}>
              <p>
              Для того, щоб здійснити замовлення в один клік, будь ласка, введіть ваш <b> номер телефону   </b>            </p>
              <InputAuth label='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />
              <div className={styles.modal__login__confirm__buttons}>
                <Button className={styles.modal__login__confirm__buttons__btn1}>Замовити</Button>
              </div>
            </div>
      </Modal>
      )}
    </div>
  )
}

export default ToOrder
