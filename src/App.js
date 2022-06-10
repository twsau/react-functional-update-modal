import { Modal } from "./components/containers";
import { ContactForm, Settings } from "./views/modals";
import { useModal } from "./hooks";

export const App = () => {
  const modal = useModal();
  return (
    <>
      <button onClick={() => modal.show(<Settings />)}>open settings</button>
      <button onClick={() => modal.show(<ContactForm />)}>
        open contact form
      </button>
      <Modal
        children={modal.content}
        isOpen={modal.active}
        onRequestClose={() => modal.toggleActive(false)}
      />
    </>
  );
};
