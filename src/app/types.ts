export enum Prioroty {
  LOW = "low", // Низкий
  MEDIUM = "medium", // Средний
  HIGH = "high", // Высокий
}

export enum Status {
  TODO = "todo", // Сделать
  PROGRESS = "progress", // В прогрессе
  DONE = "done", // Сделано
}

export const PriorityLabels = {
  low: "Низкий",
  medium: "Средний",
  high: "Высокий",
} as const;

export const StatusLabels = {
  todo: "Сделать",
  progress: "В прогрессе",
  done: "Сделано",
} as const;

export type Task = {
  id: string;
  title: string;
  priority: Prioroty;
  status: Status;
  progress: number;
};

export enum ModalName {
  ADD = "AddModal",
  EDIT = "EditModal",
  DELETE = "DeleteModal",
}
