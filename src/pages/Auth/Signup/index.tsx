import React, { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Checkbox } from 'components'
import styles from '../Auth.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { registrationUser } from 'store/features/Auth/registrationSlice'
import InputMask from 'react-input-mask';


const Signup: FC = () => {
  const userData = localStorage.getItem('userData')
  const isAuthenticated = userData !== null

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile')
    }
  }, [isAuthenticated])

  const dispatch = useAppDispatch()
  const { registerSlice } = useAppSelector(state => state)

  const [name, setName] = useState('Serik New')
  const [email, setEmail] = useState('lavrinyuk.serik.new1@gmail.com')
  const [telephone, setTelephone] = useState('+38(098)-018-34-51')
  const [password, setPassword] = useState('')
  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isTelephoneValid, setIsTelephoneValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const handleReg = async () => {
    if (telephone && password && name && email) {
      setIsNameValid(true)
      setIsTelephoneValid(true)
      setIsPasswordValid(true)
      setIsEmailValid(true)
      await dispatch(registrationUser({ name, email, telephone, password }))
    } else {
      setIsTelephoneValid(telephone !== '')
      setIsPasswordValid(password !== '')
      setIsEmailValid(email !== '')
      setIsNameValid(name !== '')
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>Реєстрація</h1>
      <div className={styles.wrapper__input__wrapper}>
        <label className={styles.wrapper__input__wrapper__label}>Ім’я</label>
        <input
          style={{ border: isNameValid ? '1px solid #95959533' : '1px solid #ab0000' }}
          className={styles.wrapper__input__wrapper__input}
          type='text'
          placeholder='Ім’я'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {!isNameValid && <p className={styles.validationMessage}>Ім’я обов'язкове</p>}
      </div>
      <div className={styles.wrapper__input__wrapper}>
        <label className={styles.wrapper__input__wrapper__label}>E-мейл</label>
        <input
          style={{ border: isEmailValid ? '1px solid #95959533' : '1px solid #ab0000' }}
          className={styles.wrapper__input__wrapper__input}
          type='email'
          placeholder='info@gmail.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {!isEmailValid && <p className={styles.validationMessage}>E-мейл обов'язковий</p>}
      </div>
      <div className={styles.wrapper__input__wrapper}>
        <label className={styles.wrapper__input__wrapper__label}>Телефон</label>
        <InputMask
          mask="+38 (099) 999-99-99" 
          maskChar="_" 
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

      {registerSlice.error && registerSlice.error.errors && (
        <div style={{ color: '#ab0000' }}>
          {registerSlice.error.errors.telephone && <p>{registerSlice.error.errors.telephone[0]}</p>}
          {registerSlice.error.errors.email && <p>{registerSlice.error.errors.email[0]}</p>}
          {registerSlice.error.message && <p>{registerSlice.error.message}</p>}
        </div>
      )}
      {registerSlice.error && <p style={{ color: '#ab0000' }}>{registerSlice.error.message}</p>}

      <Button onClick={handleReg} className={styles.wrapper__button}>
        {registerSlice.loading ? 'loading... ' : 'Увійти'}
      </Button>

      <Link className={styles.wrapper__link} to='/login'>
        Вхід
      </Link>
    </div>
  )
}

export default Signup
