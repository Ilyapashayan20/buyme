import { type FC, useState } from 'react'
import classNames from 'classnames'

import { useResponsive } from 'hooks'
import InputAuth from 'components/atom/Input/Auth'
import { Link, NavLink } from 'react-router-dom'
import { Button, Checkbox, Menu, Modal, Search } from 'components'
import { BurgerIcon, HeartStrokeIcon, LogoIcon, ShopCartIcon, UserIcon } from 'assets'

import type { TModalState } from './type'
import styles from './Header.module.scss'
import { ERoutePaths } from 'router/types'

const Header: FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const openModal = () => {
    // setShowAuthModal(true)
  }

  const closeModal = () => {
    setShowAuthModal(false)
  }
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

  const { isTablet } = useResponsive()

  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <Link to='/'>
          <LogoIcon className={styles.wrapper__logo} />
        </Link>

        {isTablet ? (
          <BurgerIcon />
        ) : (
          <>
            <Menu />

            <Search />

            <div className={styles.wrapper__icons_group}>
              <NavLink
                to={ERoutePaths.Saved}
                className={({ isActive }) =>
                  isActive
                    ? classNames(styles.wrapper__icons_group__item, styles.wrapper__icons_group__item__active)
                    : styles.wrapper__icons_group__item
                }
              >
                <HeartStrokeIcon />

                <p>Бажане</p>
              </NavLink>

              <NavLink
                to={ERoutePaths.Basket}
                className={({ isActive }) =>
                  isActive
                    ? classNames(styles.wrapper__icons_group__item, styles.wrapper__icons_group__item__active)
                    : styles.wrapper__icons_group__item
                }
              >
                <ShopCartIcon />

                <p>Кошик</p>
              </NavLink>

              <Link to='/login' role='button' onClick={openModal} className={styles.wrapper__icons_group__item}>
                <UserIcon />

                <p>Увійти</p>
              </Link>
            </div>
          </>
        )}
      </div>

      {showAuthModal && (
        <Modal onClose={closeModal} title={modalState.title}>
          {modalState.showLogin && (
            <div className={styles.modal__form}>
              <InputAuth label='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />
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
              <InputAuth label='Ім’я' type='text' />
              <InputAuth label='Телефон' type='tel' placeholder='+38 (0__) ___-__-__' />
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
      )}
    </header>
  )
}

export default Header
