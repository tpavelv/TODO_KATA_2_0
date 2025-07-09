import styles from "./style.module.scss";
import { Button } from "../../shared/ui/Button";
import Add from "../../assets/icons/add.svg?react";
import { TaskCard } from "../../entities/TaskCard";
import { Task } from "../../app/types";

type TodoListViewProps = {
  tasks: Task[];
  onOpenAddModal: () => void;
  onOpenEditModal: () => void;
  onOpenDeleteModal: () => void;
  setActiveId: (id: string) => void;
};
export const TodoListView = ({
  tasks,
  onOpenAddModal,
  onOpenEditModal,
  onOpenDeleteModal,
  setActiveId,
}: TodoListViewProps) => {
  return (
    <>
      <div className={styles["page-wrapper"]}>
        <div className={styles["top-title"]}>
          <h2>Список задач</h2>
          <Button
            title="Добавить задачу"
            icon={<Add />}
            onClick={onOpenAddModal}
          />
        </div>
        <div className={styles["task-container"]}>
          {tasks.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              showEditModal={onOpenEditModal}
              showDeleteModal={onOpenDeleteModal}
              setId={setActiveId}
            />
          ))}
        </div>
      </div>
    </>
  );
};
