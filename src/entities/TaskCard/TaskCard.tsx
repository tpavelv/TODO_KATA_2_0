import { ModalName, Task } from "../../app/types";
import { useTypedDispatch } from "../../hooks.ts/redux";

import { TaskCardView } from "./TaskCardView";
import { onShowModal } from "../../reducers/TodoSlice";

type TaskProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskProps) => {
  const dispatch = useTypedDispatch();

  const handleEdit = () => {
    dispatch(onShowModal({ name: ModalName.EDIT, id: task.id }));
  };

  const handleDelete = () => {
    dispatch(onShowModal({ name: ModalName.DELETE, id: task.id }));
  };

  return <TaskCardView {...task} onDelete={handleDelete} onEdit={handleEdit} />;
};
