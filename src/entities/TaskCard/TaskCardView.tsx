import classNames from "classnames";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import EditIcon from "../../assets/icons/edit.svg?react";
import { CircularProgressBar } from "../../shared/ui/CircularProgressBar";
import {
  PriorityLabels,
  StatusLabels,
  Prioroty,
  Status,
} from "../../app/types";

import styles from "./style.module.scss";

type TaskProps = {
  title: string;
  priority: Prioroty;
  status: Status;
  progress: number;
  onDelete: () => void;
  onEdit: () => void;
};

export const TaskCardView = ({
  title,
  priority,
  status,
  progress,
  onDelete,
  onEdit,
}: TaskProps) => {
  return (
    <div className={styles["task-card"]}>
      <div className="flex w-100">
        <span className={styles["task-title"]}>Задача</span>
        <span className={styles.task}>{title}</span>
      </div>
      <div className="flex">
        <span className={styles["priority-title"]}>Приоритет</span>
        <span
          className={classNames(
            styles[`priority--${priority}`],
            styles.priority
          )}
        >
          {PriorityLabels[priority]}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button
          className={classNames(styles[`status--${status}`], styles.status)}
        >
          {StatusLabels[status]}
        </button>
      </div>
      <div className={styles.progress}>
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className={styles.actions}>
        <EditIcon className="mr-20 cp" onClick={onEdit} />
        <DeleteIcon className="cp" onClick={onDelete} />
      </div>
    </div>
  );
};
