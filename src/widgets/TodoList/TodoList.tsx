import "./style.scss";
import Add from "../../assets/icons/add.svg?react";
import { AddEditTaskModal } from "../../features/AddEditTaskModal";
import { Button } from "../../shared/ui/Button";
import { DeleteModal } from "../../features/DeleteModal";
import { TaskCard } from "../../entities/TaskCard";
import { taskList } from "../../app/serverData/taskList";
import { useState } from "react";

export const TodoList = () => {
  type ModalName = "AddModal" | "EditModal" | "DeleteModal";
  type Mode = "add" | "edit" | null;

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modeAddEditModal, setModeAddEditModal] = useState<Mode>(null);

  const setModalVisibility = (name: ModalName, visible: boolean) => {
    switch (name) {
      case "AddModal":
        if (modeAddEditModal !== "add") {
          setModeAddEditModal("add");
        }

        setShowAddEditModal(visible);

        break;

      case "EditModal":
        if (modeAddEditModal !== "edit") {
          setModeAddEditModal("edit");
        }

        setShowAddEditModal(visible);
        break;

      case "DeleteModal":
        setShowDeleteModal(visible);
        break;
      default:
        break;
    }
  };
  const showModal = (name: ModalName) => setModalVisibility(name, true);
  const closeModal = (name: ModalName) => setModalVisibility(name, false);

  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button
            title="Добавить задачу"
            icon={<Add />}
            onClick={() => {
              showModal("AddModal");
            }}
          />
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              showEditModal={() => showModal("EditModal")}
              showDeleteModal={() => showModal("DeleteModal")}
            />
          ))}
        </div>
      </div>
      {showAddEditModal && (
        <AddEditTaskModal
          closeModal={() => closeModal("AddModal")}
          mode={modeAddEditModal}
        />
      )}
      {showDeleteModal && (
        <DeleteModal closeModal={() => closeModal("DeleteModal")} />
      )}
    </>
  );
};
