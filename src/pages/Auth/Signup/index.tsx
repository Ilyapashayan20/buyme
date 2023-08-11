import type { FC } from 'react'

// import { Button } from 'components'
// import InputAuth from 'components/atom/Input/Auth'

import styles from '../Auth.module.scss'

// import { Link } from 'react-router-dom'

const Signup: FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* <h1 className={styles.wrapper__title}>Реєстрація</h1>
      <InputAuth label='Ім’я' type='text' />

      <InputAuth label='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />
      <p className={styles.wrapper__frame}>
        Реєструючись, ви погоджуєтеся з умовами <b> положення про обробку і захист персональних даних </b> та{' '}
        <b> угодою користувача </b>
      </p>
      <Button className={styles.wrapper__button}>Зареєструватися</Button>
      <Link className={styles.wrapper__link} to='/login'>
        Я вже зареєстрований
      </Link> */}
      hi
    </div>
  )
}

export default Signup
