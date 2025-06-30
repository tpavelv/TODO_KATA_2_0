import classNames from "classnames";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import EditIcon from "../../assets/icons/edit.svg?react";
import { CircularProgressBar } from "../../shared/ui/CircularProgressBar";
import { PriorityLabels, StatusLabels, Task } from "../../app/types";
import "./style.scss";

type TaskProps = {
  task: Task;
  showEditModal: () => void;
  showDeleteModal: () => void;
  setId: (id: string) => void;
};

export const TaskCard = ({
  task: { id, title, priority, status, progress },
  showEditModal,
  showDeleteModal,
  setId,
}: TaskProps) => {
  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Задача</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Приоритет</span>
        <span className={classNames(`priority--${priority}`, "priority")}>
          {PriorityLabels[priority]}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button className={classNames(`status--${status}`, "status")}>
          {StatusLabels[status]}
        </button>
      </div>
      <div className="progress">
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className="actions">
        <EditIcon
          className="mr-20 cp"
          onClick={() => {
            setId(id);
            showEditModal();
          }}
        />
        <DeleteIcon
          className="cp"
          onClick={() => {
            setId(id);
            showDeleteModal();
          }}
        />
      </div>
    </div>
  );
};
