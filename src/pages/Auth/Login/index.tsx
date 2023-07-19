import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { useResponsive } from 'hooks'
import { Button, Chat, Checkbox } from 'components'
import InputAuth from 'components/atom/Input/Auth'

import styles from '../Auth.module.scss'

const Login: FC = () => {
  const { isTablet } = useResponsive()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>Вхід</h1>
      <InputAuth label='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />

      <Checkbox title='Запам’ятати мене' />

      <Button className={styles.wrapper__button}  >Увійти</Button>

      <Link className={styles.wrapper__link} to='/signup'>
        Зареєструватися
      </Link>

      {!isTablet && <Chat />}
    </div>
  )
}

export default Login
