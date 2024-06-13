import { useContext } from 'react';
import { VerseAddChapterModal } from './add/chapter/main';
import { VerseModalContext } from './main';

export function VerseModalView() {
  const modalContext = useContext(VerseModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <VerseAddChapterModal />}
    </>
  );
}
