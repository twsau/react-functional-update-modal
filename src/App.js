import { Modal } from "./components/Modal";
import { ContactForm, Settings } from "./views";
import { useModal } from "./hooks/useModal";

export default function App() {
  const modal = useModal((state) => state.show);
  return (
    <>
      <Modal />
      <button onClick={() => modal(<Settings />)}>settings</button>
      <button onClick={() => modal(<ContactForm />)}>contact form</button>
    </>
  );
}
