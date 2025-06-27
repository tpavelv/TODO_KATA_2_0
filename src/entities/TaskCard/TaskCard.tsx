import classNames from "classnames";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import EditIcon from "../../assets/icons/edit.svg?react";
import { CircularProgressBar } from "../../shared/ui/CircularProgressBar";
import { PriorityLabels, StatusLabels } from "../../app/types";
import "./style.scss";

export const TaskCard = ({
  task: { id, title, priority, status, progress },
  showEditModal,
  showDeleteModal,
}) => {
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
        <EditIcon className="mr-20 cp" onClick={showEditModal} />
        <DeleteIcon className="cp" onClick={showDeleteModal} />
      </div>
    </div>
  );
};
