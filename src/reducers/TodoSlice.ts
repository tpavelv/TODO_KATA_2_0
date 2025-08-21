import { Task, ModalName, Prioroty } from "../app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskList } from "../app/serverData/taskList";

interface TodoState {
  tasksData: Task[];
  activeId: string | null;
  showModal: ModalName | null;
  nextId: number;
}

const initialState: TodoState = {
  tasksData: taskList,
  activeId: null,
  showModal: null,
  nextId: 100,
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Omit<Task, "id">>) {
      const { title, priority, status, progress } = action.payload;

      const newTask = {
        title,
        priority,
        progress,
        status,
        id: String(state.nextId),
      };
      state.tasksData.push(newTask);
      state.nextId += 1;
    },

    deleteTask(state) {
      state.tasksData = state.tasksData.filter(
        (task) => task.id !== state.activeId
      );
      state.showModal = null;
      state.activeId = null;
    },

    editTask(
      state,
      action: PayloadAction<{ title: string; priority: Prioroty }>
    ) {
      const task = state.tasksData.find((task) => task.id === state.activeId);
      if (task) {
        task.title = action.payload.title;
        task.priority = action.payload.priority;
      }
    },

    onShowModal(
      state,
      action: PayloadAction<{ name: ModalName; id?: string }>
    ) {
      const { name, id } = action.payload;

      if (name === ModalName.EDIT || name === ModalName.DELETE) {
        state.activeId = id ?? null;
      }

      state.showModal = name;
    },

    onCloseModal(state) {
      state.showModal = null;
      state.activeId = null;
    },
  },
});

export const { onCloseModal, onShowModal, addTask, editTask, deleteTask } =
  todoSlice.actions;

export default todoSlice.reducer;
