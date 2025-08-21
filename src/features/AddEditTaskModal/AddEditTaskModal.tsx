import { Prioroty, ModalName, Status } from "../../app/types";
import { useTypedDispatch, useTypedSelector } from "../../hooks.ts/redux";
import { onCloseModal, addTask, editTask } from "../../reducers/TodoSlice";
import { AddEditTaskModalView } from "./AddEditTaskModalView";

import { useEffect, useState } from "react";

export const AddEditTaskModal = () => {
  const [inputValue, setInputValue] = useState("");
  const [priorityStatus, setPriorityStatus] = useState(Prioroty.HIGH);

  const mode = useTypedSelector((state) => state.todoReducer.showModal);
  const isAddMode = mode === ModalName.ADD;
  const title = isAddMode ? "Добавить" : "Редактировать";

  const activeId = useTypedSelector((state) => state.todoReducer.activeId);
  const task = useTypedSelector((state) => state.todoReducer.tasksData).find(
    (task) => task.id === activeId
  );

  useEffect(() => {
    if (!isAddMode && task) {
      setInputValue(task.title);
      setPriorityStatus(task.priority);
    }
  }, [isAddMode, task]);

  const dispatch = useTypedDispatch();

  const handleClose = () => {
    dispatch(onCloseModal());
  };

  const handleAdd = () => {
    dispatch(
      addTask({
        title: inputValue,
        priority: priorityStatus,
        status: Status.TODO,
        progress: 0,
      })
    );
  };

  const handleEdit = () => {
    dispatch(editTask({ title: inputValue, priority: priorityStatus }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isAddMode ? handleAdd() : handleEdit();

    handleClose();
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
      onClose={handleClose}
      onChange={handleInputChange}
      onPriorityChange={handleChangePriorityStatus}
      title={title}
      inputValue={inputValue}
      priorityStatus={priorityStatus}
      priorities={priorities}
    />
  );
};
