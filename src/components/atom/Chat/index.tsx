import React, { FC } from 'react';
import { Button } from 'components';
import { ChatIcon } from 'assets';
import styles from './Chat.module.scss';

const Chat: FC = () => {
  const openTelegramChat = () => {
    window.open('tg://resolve?domain=BuyMePayment', '_blank');
  };

  return (
    <div className={styles.wrapper}>
      <Button className={styles.wrapper__button} LeftIcon={ChatIcon} onClick={openTelegramChat}>
        Чат
      </Button>
    </div>
  );
};

export default Chat;
