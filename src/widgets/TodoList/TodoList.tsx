import { AddEditTaskModal } from "../../features/AddEditTaskModal";
import { DeleteModal } from "../../features/DeleteModal";

import { ModalName } from "../../app/types";
import { TodoListView } from "./TodoListView";

import { useTypedSelector, useTypedDispatch } from "../../hooks.ts/redux";
import { onShowModal } from "../../reducers/TodoSlice";

export const TodoList = () => {
  const tasksData = useTypedSelector((state) => state.todoReducer.tasksData);
  const showModal = useTypedSelector((state) => state.todoReducer.showModal);
  const dispatch = useTypedDispatch();
  const handleAdd = () => {
    dispatch(onShowModal({ name: ModalName.ADD }));
  };

  return (
    <>
      <TodoListView tasks={tasksData} onOpenAddModal={handleAdd} />

      {showModal === ModalName.DELETE && <DeleteModal />}

      {(showModal === ModalName.ADD || showModal === ModalName.EDIT) && (
        <AddEditTaskModal />
      )}
    </>
  );
};
