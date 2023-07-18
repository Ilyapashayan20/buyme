import { type FC } from 'react'

import { RoutesWrapper } from 'router'
import { Footer, Header, MobileNavBar } from 'components'

import styles from './PageLayout.module.scss'
import { useResponsive } from 'hooks'

const PageLayout: FC = () => {
  const { isTablet } = useResponsive()

  return (
    <main className={styles.wrapper}>
      <Header />

      <div className={styles.wrapper__container}>
        <RoutesWrapper />
      </div>

      <Footer />

      {isTablet && <MobileNavBar />}
    </main>
  )
}

export default PageLayout
