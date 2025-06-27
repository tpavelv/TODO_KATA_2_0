import classNames from "classnames";
import Close from "../../assets/icons/close.svg?react";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { Modal } from "../../shared/ui/Modal";
import "./style.scss";

export const AddEditTaskModal = ({ close }) => {
  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">Добавить задачу</span>
            <Close className="cp" onClick={close} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={() => {}}
            name="title"
            value=""
          />
          <div className="modal-priority">
            <span>Приортитет</span>
            <ul className="priority-buttons">
              {["high", "medium", "low"].map((priority) => (
                <li
                  key={priority}
                  className={classNames(`${priority}-selected`, priority)}
                >
                  {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Добавить" onClick={() => {}} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
