import { DraftModalContext } from '@/(core)/(project)/space/[id]/(pages)/draft/(modal)/main';
import { useContext } from 'react';
import { DraftHeaderAddButton } from './add/main';

export function DraftHeaderRight() {
  const modalContext = useContext(DraftModalContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <DraftHeaderAddButton
        onClick={() => modalContext.addFileMomentModal.open()}
      />
    </div>
  );
}
