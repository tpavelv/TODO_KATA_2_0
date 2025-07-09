import { Task } from "../../app/types";

import { TaskCardView } from "./TaskCardView";

type TaskProps = {
  task: Task;
  showEditModal: () => void;
  showDeleteModal: () => void;
  setId: (id: string) => void;
};

export const TaskCard = ({
  task,
  showEditModal,
  showDeleteModal,
  setId,
}: TaskProps) => {
  const handleEdit = () => {
    setId(task.id);
    showEditModal();
  };

  const handleDelete = () => {
    setId(task.id);
    showDeleteModal();
  };

  return <TaskCardView {...task} onDelete={handleDelete} onEdit={handleEdit} />;
};
