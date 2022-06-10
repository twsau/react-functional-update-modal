import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

export const Modal = ({ children, isOpen, onRequestClose }) => (
  <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
    {children}
  </ReactModal>
);
