import { SpaceVerseModalContext } from '@/(core)/(project)/space/[id]/(pages)/verse/(modal)/main';
import { useContext } from 'react';
import { SpaceVerseRightAdd } from './add/main';

export function SpaceVerseHeaderRight() {
  const modalContext = useContext(SpaceVerseModalContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <SpaceVerseRightAdd
        onClick={() => modalContext.addFileMomentModal.open()}
      />
    </div>
  );
}
