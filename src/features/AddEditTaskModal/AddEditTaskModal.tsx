import classNames from "classnames";
import Close from "../../assets/icons/close.svg?react";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { Modal } from "../../shared/ui/Modal";
import { PriorityLabels, Prioroty } from "../../app/types";
import "./style.scss";
import { useEffect, useState } from "react";

export const AddEditTaskModal = ({
  closeModal,
  mode,
  handleAdd,
  handleEdit,
  task,
}) => {
  const isAddMode = mode === "add";

  const title = isAddMode ? "Добавить" : "Редактировать";
  const [inputValue, setInputValue] = useState("");
  const [priorityStatus, setPriorityStatus] = useState(Prioroty.HIGH);

  useEffect(() => {
    if (!isAddMode) {
      setInputValue(task.title);
      setPriorityStatus(task.priority);
    }
  }, [isAddMode, mode, task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    isAddMode
      ? handleAdd(inputValue, priorityStatus)
      : handleEdit(task.id, inputValue, priorityStatus);
    closeModal();
  };

  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">{`${title} задачу`}</span>
            <Close className="cp" onClick={closeModal} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            name="title"
            value={inputValue}
          />
          <div className="modal-priority">
            <span>Приортитет</span>
            <ul className="priority-buttons">
              {["high", "medium", "low"].map((priority) => (
                <li
                  key={priority}
                  className={classNames(priority, {
                    [`${priority}-selected`]: priority === priorityStatus,
                  })}
                  onClick={() => setPriorityStatus(priority)}
                >
                  {PriorityLabels[priority]}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title={title} onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
