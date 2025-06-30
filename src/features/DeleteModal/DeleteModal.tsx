import { Button } from "../../shared/ui/Button";
import { Modal } from "../../shared/ui/Modal";
import styles from "./style.module.scss";

type DeleteModalProps = {
  closeModal: () => void;
  deleteTask: (id: string | null) => void;
  id: string | null;
};

export const DeleteModal = ({
  closeModal,
  deleteTask,
  id,
}: DeleteModalProps) => {
  return (
    <Modal>
      <div className={styles["delete-modal"]}>
        <p>Точно удалить задачу?</p>
        <div className={styles["delete-modal__actions"]}>
          <Button
            title="Удалить"
            onClick={() => {
              deleteTask(id);
              closeModal();
            }}
          />
          <Button title="Выйти" outline onClick={closeModal} />
        </div>
      </div>
    </Modal>
  );
};
