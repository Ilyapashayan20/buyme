import { Button, Checkbox } from 'components'
import InputAuth from 'components/atom/Input/Auth'
import type { FC } from 'react'
import styles from '../Auth.module.scss'
import { Link } from 'react-router-dom'

const Login: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>Вхід</h1>
      <InputAuth lable='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />
      <Checkbox title='Запам’ятати мене' />
      <Button>Увійти</Button>
      <Link className={styles.wrapper__link} to="/signup">Зареєструватися</Link>
    </div>
  )
}

export default Login
