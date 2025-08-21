import { AddEditTaskModal } from "../../features/AddEditTaskModal";
import { DeleteModal } from "../../features/DeleteModal";
import { taskList } from "../../app/serverData/taskList";
import { useRef, useState } from "react";
import { Task, ModalName, Status, Prioroty } from "../../app/types";
import { TodoListView } from "./TodoListView";

import { useTypedSelector, useTypedDispatch } from "../../hooks.ts/redux";
import {
  onCloseModal,
  onShowModal,
  addTask,
  editTask,
  deleteTask,
} from "../../reducers/TodoSlice";

export const TodoList = () => {
  const tasksData = useTypedSelector((state) => state.todoReducer.tasksData);
  const showModal = useTypedSelector((state) => state.todoReducer.showModal);
  const activeId = useTypedSelector((state) => state.todoReducer.activeId);
  const dispatch = useTypedDispatch();
  const handleAdd = () => {
    dispatch(onShowModal({ name: ModalName.ADD }));
  };

  // const [showModal, setShowModal] = useState<ModalName | null>(null);
  // const [tasksData, setTasksData] = useState<Task[]>(taskList);
  // const [activeId, setActiveId] = useState<string | null>(null);

  // const idCount = useRef(100);

  // const onShowModal = (name: ModalName) => {
  //   switch (name) {
  //     case ModalName.ADD:
  //       setShowModal(ModalName.ADD);
  //       break;

  //     case ModalName.EDIT:
  //       setShowModal(ModalName.EDIT);
  //       break;

  //     case ModalName.DELETE:
  //       setShowModal(ModalName.DELETE);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // const onCloseModal = () => {
  //   setShowModal(null);
  // };

  // const createTask = (
  //   title: string,
  //   priority: Prioroty,
  //   status = Status.TODO,
  //   progress: number = 0
  // ) => {
  //   return {
  //     id: String((idCount.current += 1)),
  //     title,
  //     priority,
  //     status,
  //     progress,
  //   };
  // };

  // const addTask = (title: string, priority: Prioroty) => {
  //   const newTask = createTask(title, priority);

  //   setTasksData((prev) => [...prev, newTask]);
  // };

  // const deleteTask = (id: string | null) => {
  //   setTasksData((prevData) => prevData.filter((task) => task.id !== id));
  // };

  // const editTask = (id: string, title: string, priority: Prioroty) => {
  //   setTasksData((prevData) =>
  //     prevData.map((task) =>
  //       task.id === id ? { ...task, title, priority } : task
  //     )
  //   );
  // };

  // const findActiveTask = (arr: Task[], id: string | null) => {
  //   return arr.filter((task) => task.id === id)[0];
  // };

  //   return (
  //     <>
  //       <TodoListView
  //         tasks={tasksData}
  //         onOpenAddModal={() => {
  //           onShowModal(ModalName.ADD);
  //         }}
  //         onOpenEditModal={() => onShowModal(ModalName.EDIT)}
  //         onOpenDeleteModal={() => onShowModal(ModalName.DELETE)}
  //         setActiveId={setActiveId}
  //       />

  //       {showModal === ModalName.DELETE && (
  //         <DeleteModal
  //           id={activeId}
  //           closeModal={onCloseModal}
  //           deleteTask={deleteTask}
  //         />
  //       )}

  //       {(showModal === ModalName.ADD || showModal === ModalName.EDIT) && (
  //         <AddEditTaskModal
  //           closeModal={onCloseModal}
  //           mode={showModal}
  //           handleAdd={addTask}
  //           handleEdit={editTask}
  //           task={findActiveTask(tasksData, activeId)}
  //         />
  //       )}
  //     </>
  //   );
  // };

  return (
    <>
      <TodoListView tasks={tasksData} onOpenAddModal={handleAdd} />

      {showModal === ModalName.DELETE && <DeleteModal />}

      {(showModal === ModalName.ADD || showModal === ModalName.EDIT) && (
        <AddEditTaskModal
        // closeModal={() => {}}
        // mode={ModalName.ADD}
        // // handleAdd={() => {}}
        // handleEdit={() => {}}
        // task={tasksData.find((task) => task.id === activeId)}
        // closeModal={onCloseModal}
        // mode={showModal}
        // handleAdd={addTask}
        // handleEdit={editTask}
        // task={findActiveTask(tasksData, activeId)}
        />
      )}
    </>
  );
};
