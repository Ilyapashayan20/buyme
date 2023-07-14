import { type FC } from 'react'

import { Header } from 'components'
import { RoutesWrapper } from 'router'

import styles from './PageLayout.module.scss'

const PageLayout: FC = () => {
  return (
    <main className={styles.wrapper}>
      <Header />

      <RoutesWrapper />
    </main>
  )
}

export default PageLayout
