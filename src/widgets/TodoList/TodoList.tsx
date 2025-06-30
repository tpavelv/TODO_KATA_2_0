import styles from "./style.module.scss";

import Add from "../../assets/icons/add.svg?react";
import { AddEditTaskModal } from "../../features/AddEditTaskModal";
import { Button } from "../../shared/ui/Button";
import { DeleteModal } from "../../features/DeleteModal";
import { TaskCard } from "../../entities/TaskCard";
import { taskList } from "../../app/serverData/taskList";
import { useRef, useState } from "react";
import { Task, ModalName, Status, Prioroty, Mode } from "../../app/types";

export const TodoList = () => {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modeAddEditModal, setModeAddEditModal] = useState<Mode>(Mode.ADD);
  const [tasksData, setTasksData] = useState<Task[]>(taskList);
  const [activeId, setActiveId] = useState<string | null>(null);

  const idCount = useRef(100);

  const setModalVisibility = (name: ModalName, visible: boolean) => {
    switch (name) {
      case ModalName.ADD:
        if (modeAddEditModal !== Mode.ADD) {
          setModeAddEditModal(Mode.ADD);
        }

        setShowAddEditModal(visible);

        break;

      case ModalName.EDIT:
        if (modeAddEditModal !== Mode.EDIT) {
          setModeAddEditModal(Mode.EDIT);
        }

        setShowAddEditModal(visible);
        break;

      case ModalName.DELETE:
        setShowDeleteModal(visible);
        break;
      default:
        break;
    }
  };

  const showModal = (name: ModalName) => setModalVisibility(name, true);
  const closeModal = (name: ModalName) => setModalVisibility(name, false);

  const createTask = (
    title: string,
    priority: Prioroty,
    status = Status.TODO,
    progress: number = 0
  ) => {
    return {
      id: String((idCount.current += 1)),
      title,
      priority,
      status,
      progress,
    };
  };

  const addTask = (title: string, priority: Prioroty) => {
    const newTask = createTask(title, priority);

    setTasksData((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string | null) => {
    setTasksData((prevData) => prevData.filter((task) => task.id !== id));
  };

  const editTask = (id: string, title: string, priority: Prioroty) => {
    setTasksData((prevData) =>
      prevData.map((task) =>
        task.id === id ? { ...task, title, priority } : task
      )
    );
  };

  const findActiveTask = (arr: Task[], id: string | null) => {
    return arr.filter((task) => task.id === id)[0];
  };

  return (
    <>
      <div className={styles["page-wrapper"]}>
        <div className={styles["top-title"]}>
          <h2>Список задач</h2>
          <Button
            title="Добавить задачу"
            icon={<Add />}
            onClick={() => {
              showModal(ModalName.ADD);
            }}
          />
        </div>
        <div className={styles["task-container"]}>
          {tasksData.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              showEditModal={() => showModal(ModalName.EDIT)}
              showDeleteModal={() => showModal(ModalName.DELETE)}
              setId={(id) => setActiveId(id)}
            />
          ))}
        </div>
      </div>
      {showAddEditModal && (
        <AddEditTaskModal
          closeModal={() => closeModal(ModalName.ADD)}
          mode={modeAddEditModal}
          handleAdd={addTask}
          handleEdit={editTask}
          task={findActiveTask(tasksData, activeId)}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          id={activeId}
          closeModal={() => closeModal(ModalName.DELETE)}
          deleteTask={(id) => {
            deleteTask(id);
          }}
        />
      )}
    </>
  );
};
