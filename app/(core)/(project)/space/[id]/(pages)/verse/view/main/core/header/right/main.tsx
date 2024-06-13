import { VerseModalContext } from '@/(core)/(project)/space/[id]/(pages)/verse/(modal)/main';
import { useContext } from 'react';
import { VerseHeaderAddButton } from './add/main';

export function VerseHeaderRight() {
  const modalContext = useContext(VerseModalContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <VerseHeaderAddButton
        onClick={() => modalContext.addFileMomentModal.open()}
      />
    </div>
  );
}
