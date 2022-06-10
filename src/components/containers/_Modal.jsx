import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

export const Modal = ({ children, isOpen, onRequestClose }) => (
  <ReactModal
    children={children}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  />
);
