import { type FC } from 'react'

import { Footer, Header } from 'components'
import { RoutesWrapper } from 'router'

import styles from './PageLayout.module.scss'

const PageLayout: FC = () => {
  return (
    <main className={styles.wrapper}>
      <Header />

      <div className={styles.wrapper__container}>
        <RoutesWrapper />
      </div>

      <Footer />
    </main>
  )
}

export default PageLayout
