import { DraftModalContext } from '@/(cosmos)/(modals)/draft-modal/main';
import { useContext } from 'react';
import { DraftContext } from '../../../page';
import { DraftChapter } from './item/main';
import DraftChaptersAdd from './add/main';

export function DraftChaptersRow() {
  const { chapters } = useContext(DraftContext);
  const { addChapterModal } = useContext(DraftModalContext);

  return (
    <div className='flex h-full flex-grow flex-row items-center space-x-[3px] overflow-auto'>
      {chapters.map((chapter) => (
        <DraftChapter chapter={chapter} />
      ))}
      <DraftChaptersAdd onClick={() => addChapterModal.open()} />
    </div>
  );
}
