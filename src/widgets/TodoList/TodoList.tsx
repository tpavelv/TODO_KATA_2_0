import "./style.scss";
import Add from "../../assets/icons/add.svg?react";
import { AddEditTaskModal } from "../../features/AddEditTaskModal";
import { Button } from "../../shared/ui/Button";
import { DeleteModal } from "../../features/DeleteModal";
import { TaskCard } from "../../entities/TaskCard";
import { taskList } from "../../app/serverData/taskList";

export const TodoList = () => {
  const showAddEditModal = false;
  const showDeleteModal = false;
  console.log(taskList);
  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => {}} />
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal />}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};
