import { Modal } from "./components/Modal";
import { ContactForm, Settings } from "./views/modals";
import { useModal } from "./hooks/useModal";

export default function App() {
  const modal = useModal();
  return (
    <>
      <Modal />
      <button onClick={() => modal.show(<Settings />)}>settings</button>
      <button onClick={() => modal.show(<ContactForm />)}>contact form</button>
    </>
  );
}
