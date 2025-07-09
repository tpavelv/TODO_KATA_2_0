import { DeleteModalView } from "./DeleteModalView";

type DeleteModalProps = {
  closeModal: () => void;
  deleteTask: (id: string | null) => void;
  id: string | null;
};

export const DeleteModal = ({
  closeModal,
  deleteTask,
  id,
}: DeleteModalProps) => {
  const handleDelete = () => {
    deleteTask(id);
    closeModal();
  };

  return <DeleteModalView onDelete={handleDelete} onClose={closeModal} />;
};
