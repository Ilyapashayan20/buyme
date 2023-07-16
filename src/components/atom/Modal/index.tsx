import type { FC } from 'react'
import styles from './Modal.module.scss'
import { ModalProps } from './type'
import { CloseIcon, CogIcon } from 'assets'

const Modal: FC<ModalProps> = ({ title, children, onClose, icon: IconComponent }) => (
  <div className={styles.modal}>
    <div className={styles.modal__block}>
      <div className={styles.modal__block__header}>
        {title ? (
          <div className={styles.modal__block__title}>{title}</div>
        ) : (
          <div style={{ margin: 'auto', paddingLeft: '24px' }}> {IconComponent ? <IconComponent /> : <CogIcon />}</div>
        )}
        <button onClick={onClose} className={styles.modal__block__header__close__btn}>
          <CloseIcon />
        </button>
      </div>
      {children}
    </div>
  </div>
)
{
}
export default Modal
