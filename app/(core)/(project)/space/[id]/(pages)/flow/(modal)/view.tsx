import { useContext } from 'react';
import { SpaceFlowAddChapterModal } from './add/chapter/main';
import { SpaceFlowModalContext } from './main';

export function SpaceFlowModalView() {
  const modalContext = useContext(SpaceFlowModalContext);

  return (
    <>{modalContext.addChapterModal.opened && <SpaceFlowAddChapterModal />}</>
  );
}
