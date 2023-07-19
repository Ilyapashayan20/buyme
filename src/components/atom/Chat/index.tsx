import type { FC } from 'react'

import { Button } from 'components'
import { ChatIcon } from 'assets'

import styles from './Chat.module.scss'

const Chat: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.wrapper__button} LeftIcon={ChatIcon}>
        Чат
      </Button>
    </div>
  )
}

export default Chat
