import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useModal } from "../hooks/useModal";
ReactModal.setAppElement("#root");

export const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  const { content } = useModal();
  useEffect(() => setOpen(content ? true : false), [content]);

  return (
    <ReactModal
      children={content}
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
    />
  );
};
