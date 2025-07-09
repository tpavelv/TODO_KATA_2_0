import classNames from "classnames";
import Close from "../../assets/icons/close.svg?react";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import { Modal } from "../../shared/ui/Modal";
import { PriorityLabels, Prioroty } from "../../app/types";

import styles from "./style.module.scss";

type AddEditTaskModalViewProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  onPriorityChange: (value: Prioroty) => void;
  inputValue: string;
  priorityStatus: Prioroty;
  priorities: Prioroty[];
};

export const AddEditTaskModalView = ({
  title,
  inputValue,
  priorityStatus,
  priorities,
  onSubmit,
  onClose,
  onChange,
  onPriorityChange,
}: AddEditTaskModalViewProps) => {
  return (
    <Modal>
      <form onSubmit={onSubmit}>
        <div className={styles["add-edit-modal"]}>
          <div className="flx-between">
            <span className={styles["modal-title"]}>{`${title} задачу`}</span>
            <Close className="cp" onClick={onClose} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={onChange}
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
                  onClick={() => onPriorityChange(priority)}
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
