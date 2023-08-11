import React, { FC, useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button, Checkbox } from 'components'
import styles from '../Auth.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { loginUser } from 'store/features/Auth/loginSlice'

const Login: FC = () => {
  const dispatch = useAppDispatch()
  const { loginSlice } = useAppSelector(state => state)

  const [telephone, setTelephone] = useState('')
  const [password, setPassword] = useState('')
  const [isTelephoneValid, setIsTelephoneValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const navigate = useNavigate();

  const auth = loginSlice.data
  const isLoggedIn = auth !== null;



  const handleLogin = async () => {
    if (telephone && password) {
      setIsTelephoneValid(true)
      setIsPasswordValid(true)
      await dispatch(loginUser({ telephone, password }))
    } else {
      setIsTelephoneValid(telephone !== '')
      setIsPasswordValid(password !== '')
    }
  }

  useEffect(()=>{
    if (isLoggedIn) {
      navigate('/profile')
    }
  })


  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>Вхід</h1>
      <div className={styles.wrapper__input__wrapper}>
        <label className={styles.wrapper__input__wrapper__label}>Телефон</label>
        <input
          style={{ border: isTelephoneValid ? '1px solid #95959533' : '1px solid #ab0000' }}
          className={styles.wrapper__input__wrapper__input}
          type='tel'
          placeholder='+38 (0__) ___-__-__'
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        />
        {!isTelephoneValid && <p className={styles.validationMessage}>Номер телефону обов'язковий</p>}
      </div>
      <div className={styles.wrapper__input__wrapper}>
        <label className={styles.wrapper__input__wrapper__label}>Пароль</label>
        <input
          style={{ border: isPasswordValid ? '1px solid #95959533' : '1px solid #ab0000' }}
          className={`${styles.wrapper__input__wrapper__input} `}
          type='password'
          placeholder='Пароль'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {!isPasswordValid && <p className={styles.validationMessage}>Необхідно ввести пароль</p>}
      </div>

      <Checkbox title='Запам’ятати мене' />

      {loginSlice.error && <p style={{ color: '#ab0000' }}>{loginSlice.error}</p>}

      <Button onClick={handleLogin} className={styles.wrapper__button}>
        {loginSlice.loading ? 'loading... ' : 'Увійти'}
      </Button>

      <Link className={styles.wrapper__link} to='/signup'>
        Зареєструватися
      </Link>
    </div>
  )
}

export default Login
