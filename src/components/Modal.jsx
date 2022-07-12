import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useModal } from "../hooks/useModal";
ReactModal.setAppElement("#root");

export const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  const content = useModal((state) => state.content);
  useEffect(() => {
    if (!content) return;
    setOpen(true);
  }, [content]);
  return (
    <ReactModal
      children={content}
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
    />
  );
};
