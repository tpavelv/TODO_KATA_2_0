import "./style.scss"

export const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  )
}

export default Modal
