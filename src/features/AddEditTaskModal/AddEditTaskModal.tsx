import { Prioroty, Task, ModalName } from "../../app/types";
import { AddEditTaskModalView } from "./AddEditTaskModalView";

import { useEffect, useState } from "react";

type AddEditTaskModalProps = {
  closeModal: () => void;
  mode: ModalName;
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
  const isAddMode = mode === ModalName.ADD;
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleChangePriorityStatus = (value: Prioroty) => {
    setPriorityStatus(value);
  };

  const priorities: Prioroty[] = [Prioroty.HIGH, Prioroty.MEDIUM, Prioroty.LOW];
  return (
    <AddEditTaskModalView
      onSubmit={handleSubmit}
      onClose={closeModal}
      onChange={handleInputChange}
      onPriorityChange={handleChangePriorityStatus}
      title={title}
      inputValue={inputValue}
      priorityStatus={priorityStatus}
      priorities={priorities}
    />
  );
};
