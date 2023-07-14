import { FC, useState } from 'react'

import { HeartIcon, ListIcon, LogoIcon, SearchIcon, ShopCartIcon, UserIcon } from 'assets'

import styles from './Header.module.scss'
import { Button, Checkbox, Modal } from 'components/atom'
import InputAuth from 'components/atom/Input/Auth'
import { TModalState } from './type'

const Header: FC = () => {
  const [modalState, setModalState] = useState<TModalState>({
    title: 'Вхід',
    showLogin: true,
    showLoginConfirm: false,
    showRegister: false,
    showRegisterConfirm: false,
  })

  const handleLoginClick = () => {
    setModalState({
      title: '',
      showLogin: false,
      showLoginConfirm: true,
    })
  }
  const handleRegisterClick = () => {
    setModalState({
      title: 'Реєстрація',
      showLoginConfirm: false,
      showRegister: true,
    })
  }
  const handleRegisterConfirmClick = () => {
    setModalState({
      showRegister: false,
      showRegisterConfirm: true,
    })
  }

  const showLogin = () => {
    setModalState({
      title: 'Вхід',
      showLogin: true,
    })
  }

  return (
    <header className={styles.wrapper}>
      <LogoIcon className={styles.wrapper__logo} />

      <button className={styles.wrapper__catalog}>
        <ListIcon />

        <p>Каталог</p>
      </button>

      <div className={styles.wrapper__search}>
        <input placeholder='Введіть назву товару або артикул' type='text' className={styles.wrapper__search__input} />

        <button className={styles.wrapper__search__button}>
          <SearchIcon />
        </button>
      </div>

      <div className={styles.wrapper__icons_group}>
        <div className={styles.wrapper__icons_group__item}>
          <HeartIcon />

          <p>Бажане</p>
        </div>

        <div className={styles.wrapper__icons_group__item}>
          <ShopCartIcon />

          <p>Кошик</p>
        </div>

        <div className={styles.wrapper__icons_group__item}>
          <UserIcon />

          <p>Увійти</p>
        </div>
      </div>
      <Modal title={modalState.title}>
        {modalState.showLogin && (
          <div className={styles.modal__form}>
            <InputAuth lable='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />
            <Checkbox title='Запам’ятати мене' />
            <Button onClick={handleLoginClick}>Увійти</Button>
            <button onClick={handleRegisterClick} className={styles.modal__form__link}>
              Зареєструватися
            </button>
          </div>
        )}

        {modalState.showLoginConfirm && (
          <div className={styles.modal__login__confirm}>
            <p>
              Для підтвердження входу в обліковий запис, відкрийте <b>Telegram</b> та натисніть кнопку з цифрою:
            </p>
            <span>67</span>
            <div className={styles.modal__login__confirm__buttons}>
              <Button className={styles.modal__login__confirm__buttons__btn1}>Відновлення доступу</Button>
              <Button className={styles.modal__login__confirm__buttons__btn2}>Відмінити вхід</Button>
            </div>
          </div>
        )}

        {modalState.showRegister && (
          <div className={styles.modal__form}>
            <InputAuth lable='Ім’я' type='text' />
            <InputAuth lable='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />
            <p className={styles.modal__form__frame}>
              Реєструючись, ви погоджуєтеся з умовами <b>положення про обробку і захист персональних даних</b> та{' '}
              <b>угодою користувача</b>
            </p>
            <Button onClick={handleRegisterConfirmClick}>Зареєструватися</Button>
            <button onClick={showLogin} className={styles.wrapper__link}>
              Я вже зареєстрований
            </button>
          </div>
        )}

        {modalState.showRegisterConfirm && (
          <div className={styles.modal__login__confirm}>
            <p>
              Для підтвердження входу в обліковий запис, відкрийте <b>Telegram</b> та натисніть кнопку з цифрою:
            </p>
            <span>49</span>
            <div className={styles.modal__login__confirm__buttons}>
              <Button className={styles.modal__login__confirm__buttons__btn1}>Відкрити Telegram</Button>
              <Button className={styles.modal__login__confirm__buttons__btn2}>Відмінити вхід</Button>
            </div>
          </div>
        )}
      </Modal>
    </header>
  )
}

export default Header
