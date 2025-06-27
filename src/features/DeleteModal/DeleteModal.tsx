import { Button } from "../../shared/ui/Button";
import { Modal } from "../../shared/ui/Modal";
import "./style.scss";

export const DeleteModal = () => {
  return (
    <Modal>
      <div className="delete-modal">
        <p>Точно удалить задачу?</p>
        <div className="delete-modal__actions">
          <Button title="Удалить" onClick={() => {}} />
          <Button title="Выйти" outline onClick={() => {}} />
        </div>
      </div>
    </Modal>
  );
};
