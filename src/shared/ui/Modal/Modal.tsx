import { ReactNode } from "react";
import styles from "./style.module.scss";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>{children}</div>
    </div>
  );
};

export default Modal;
