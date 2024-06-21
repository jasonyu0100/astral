import { useContext } from 'react';
import { SpaceVerseAddChapterModal } from './add/chapter/main';
import { SpaceVerseModalContext } from './main';

export function SpaceVerseModalView() {
  const modalContext = useContext(SpaceVerseModalContext);

  return (
    <>{modalContext.addChapterModal.opened && <SpaceVerseAddChapterModal />}</>
  );
}
