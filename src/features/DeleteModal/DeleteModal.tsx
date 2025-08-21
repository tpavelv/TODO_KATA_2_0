import { useTypedDispatch } from "../../hooks.ts/redux";
import { deleteTask, onCloseModal } from "../../reducers/TodoSlice";
import { DeleteModalView } from "./DeleteModalView";

export const DeleteModal = () => {
  const dispatch = useTypedDispatch();

  const handleDelete = () => {
    dispatch(deleteTask());
  };

  const handleClose = () => {
    dispatch(onCloseModal());
  };

  return <DeleteModalView onDelete={handleDelete} onClose={handleClose} />;
};
