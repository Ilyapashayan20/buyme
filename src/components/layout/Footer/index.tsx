import type { FC } from 'react'

import { FacebookIcon, InstagramIcon, LogoIcon, PhoneIcon } from 'assets'

import styles from './Footer.module.scss'

const Footer: FC = () => (
  <footer className={styles.wrapper}>
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

export default Footer
