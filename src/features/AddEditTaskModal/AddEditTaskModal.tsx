import classNames from "classnames";
import Close from "../../assets/icons/close.svg?react";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { Modal } from "../../shared/ui/Modal";
import { PriorityLabels, Prioroty, Mode, Task } from "../../app/types";
// import "./style.scss";
import styles from "./style.module.scss";

import { useEffect, useState } from "react";

type AddEditTaskModalProps = {
  closeModal: () => void;
  mode: Mode;
  handleAdd: (title: string, priority: Prioroty) => void;
  handleEdit: (id: string, title: string, priority: Prioroty) => void;
  task: Task;
};

export const AddEditTaskModal = ({
  closeModal,
  mode,
  handleAdd,
  handleEdit,
  task,
}: AddEditTaskModalProps) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isAddMode
      ? handleAdd(inputValue, priorityStatus)
      : handleEdit(task.id, inputValue, priorityStatus);
    closeModal();
  };
  const priorities: Prioroty[] = [Prioroty.HIGH, Prioroty.MEDIUM, Prioroty.LOW];
  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <div className={styles["add-edit-modal"]}>
          <div className="flx-between">
            <span className={styles["modal-title"]}>{`${title} задачу`}</span>
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
          <div className={styles["modal-priority"]}>
            <span>Приортитет</span>
            <ul className={styles["priority-buttons"]}>
              {priorities.map((priority) => (
                <li
                  key={priority}
                  className={classNames(styles[priority], {
                    [styles[`${priority}-selected`]]:
                      priority === priorityStatus,
                  })}
                  onClick={() => setPriorityStatus(priority)}
                >
                  {PriorityLabels[priority]}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title={title} type="submit" />
          </div>
        </div>
      </form>
    </Modal>
  );
};
