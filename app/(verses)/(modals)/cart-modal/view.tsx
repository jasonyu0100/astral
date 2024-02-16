import { useContext } from 'react';
import { EditElementsModal } from './edit-elements/main';
import { ElementsModalContext } from './main';

export function CartModalView() {
  const modalContext = useContext(ElementsModalContext);

  return <>{modalContext.elementsModal.opened && <EditElementsModal />}</>;
}
