import { type FC } from 'react'

import { Footer, Header } from 'components'
import { RoutesWrapper } from 'router'

import styles from './PageLayout.module.scss'

const PageLayout: FC = () => {
  return (
    <main className={styles.wrapper}>
      <Header />

      <RoutesWrapper />

      <Footer />
    </main>
  )
}

export default PageLayout
