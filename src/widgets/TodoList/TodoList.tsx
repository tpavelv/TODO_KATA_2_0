import "./style.scss";
import Add from "../../assets/icons/add.svg?react";
import { AddEditTaskModal } from "../../features/AddEditTaskModal";
import { Button } from "../../shared/ui/Button";
import { DeleteModal } from "../../features/DeleteModal";
import { TaskCard } from "../../entities/TaskCard";
import { taskList } from "../../app/serverData/taskList";
import { useState } from "react";

export const TodoList = () => {
  const tasks;

  type ModalName = "AddEditModal" | "showDeleteModal";
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const setModalVisibility = (name, visible: boolean) => {
    switch (name) {
      case "AddEditModal":
        setShowAddEditModal(visible);
        break;
      case "showDeleteModal":
        setShowDeleteModal(visible);
        break;
      default:
        break;
    }
  };

  const closeModal = (nameModal: string) => {
    switch (nameModal) {
      case "AddEditModal":
        setShowAddEditModal(false);
        break;
      case "showDeleteModal":
        setShowDeleteModal(false);
        break;
      default:
        break;
    }
  };

  const showModal = (nameModal: string) => {
    switch (nameModal) {
      case "AddEditModal":
        setShowAddEditModal(true);
        break;
      case "showDeleteModal":
        setShowDeleteModal(true);
        break;
      default:
        break;
    }
  };

  console.log(taskList);
  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button
            title="Добавить задачу"
            icon={<Add />}
            onClick={() => showModal("AddEditModal")}
          />
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal close={closeModal} />}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};
