import "./style.scss";
import Add from "../../assets/icons/add.svg?react";
import { AddEditTaskModal } from "../../features/AddEditTaskModal";
import { Button } from "../../shared/ui/Button";
import { DeleteModal } from "../../features/DeleteModal";
import { TaskCard } from "../../entities/TaskCard";
import { taskList } from "../../app/serverData/taskList";
import { useRef, useState } from "react";
import { Task, ModalName, Status, Prioroty } from "../../app/types";

export const TodoList = () => {
  type Mode = "add" | "edit";

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modeAddEditModal, setModeAddEditModal] = useState<Mode>("add");
  const [tasksData, setTasksData] = useState<Task[]>(taskList);
  const [activeId, setActiveId] = useState(null);

  const idCount = useRef(100);

  const setModalVisibility = (name: ModalName, visible: boolean) => {
    switch (name) {
      case ModalName.ADD:
        if (modeAddEditModal !== "add") {
          setModeAddEditModal("add");
        }

        setShowAddEditModal(visible);

        break;

      case ModalName.EDIT:
        if (modeAddEditModal !== "edit") {
          setModeAddEditModal("edit");
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

  const addTask = (title, priority: Prioroty) => {
    const newTask = createTask(title, priority);

    setTasksData((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasksData((prevData) => prevData.filter((task) => task.id !== id));
  };

  const editTask = (id, title, priority) => {
    setTasksData((prevData) =>
      prevData.map((task) =>
        task.id === id ? { ...task, title, priority } : task
      )
    );
  };

  const findActiveTask = (arr, id) => {
    return arr.filter((task) => task.id === id)[0];
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button
            title="Добавить задачу"
            icon={<Add />}
            onClick={() => {
              showModal(ModalName.ADD);
            }}
          />
        </div>
        <div className="task-container">
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
          handleAdd={(...args) => addTask(...args)}
          handleEdit={(...args) => editTask(...args)}
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
