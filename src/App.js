import { useModal } from "./hooks/useModal";
import { Modal } from "./components/Modal";
import { ContactForm, Settings } from "./views";

export default function App() {
  const { modal } = useModal();
  return (
    <>
      <Modal />
      <button onClick={() => modal(<Settings />)}>settings</button>
      <button onClick={() => modal(<ContactForm />)}>contact form</button>
    </>
  );
}
