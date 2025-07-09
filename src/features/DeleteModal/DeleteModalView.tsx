import { Button } from "../../shared/ui/Button";
import { Modal } from "../../shared/ui/Modal";
import styles from "./style.module.scss";

type DeleteModalProps = {
  onDelete: () => void;
  onClose: () => void;
};

export const DeleteModalView = ({ onDelete, onClose }: DeleteModalProps) => {
  return (
    <Modal>
      <div className={styles["delete-modal"]}>
        <p>Точно удалить задачу?</p>
        <div className={styles["delete-modal__actions"]}>
          <Button title="Удалить" onClick={onDelete} />
          <Button title="Выйти" outline onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};
