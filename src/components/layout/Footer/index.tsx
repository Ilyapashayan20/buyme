import { type FC, useEffect, useState } from 'react'

import { Chat } from 'components'
import { FacebookIcon, InstagramIcon, LogoIcon, PhoneIcon } from 'assets'

import styles from './Footer.module.scss'
import { useLocation } from 'react-router'
import { useResponsive } from 'hooks'

const Footer: FC = () => {
  const location = useLocation()
  const { isTablet } = useResponsive()
  const [isPathNameHome, setIsPathNameHome] = useState<string>()

  useEffect(() => {
    setIsPathNameHome(location.pathname)
  }, [location])

  return (
    <footer className={styles.wrapper}>
      {isPathNameHome !== '/' && !isTablet && (
        <div className={styles.wrapper__chat}>
          <Chat />
        </div>
      )}

      <div className={styles.wrapper__container}>
        <LogoIcon />

        <div className={styles.wrapper__center}>
          <p className={styles.wrapper__center__text}>Про нас</p>

          <p className={styles.wrapper__center__text}>Контакти</p>

          <p className={styles.wrapper__center__text}>Блог</p>

          <p className={styles.wrapper__center__text}>Політика конфіденційності</p>
        </div>

        <div className={styles.wrapper__social}>
          <div className={styles.wrapper__social__icons}>
            <InstagramIcon />

            <FacebookIcon />
          </div>

          <div className={styles.wrapper__social__phone}>
            <PhoneIcon />

            <p className={styles.wrapper__social__phone__number}>0 800 32 32 44</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
