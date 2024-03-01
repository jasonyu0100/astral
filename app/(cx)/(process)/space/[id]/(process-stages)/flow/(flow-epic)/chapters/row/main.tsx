import { FlowModalContext } from '@/(modals)/(process)/flow-modal/main';
import { useContext } from 'react';
import { FlowContext } from '../../../page';
import FlowChaptersAdd from './add/main';
import { FlowChapter } from './item/main';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';

export function FlowChaptersRow() {
  const { chapters } = useContext(FlowContext);
  const modalContext = useContext(FlowModalContext);
  const { open } = modalContext.addChapterModal;

  return (
    <div className='flex h-full flex-grow flex-row items-center space-x-[3px] overflow-auto'>
      {chapters.map((chapter) => (
        // eslint-disable-next-line react/jsx-key
        <ChapterContext.Provider value={chapter}>
          <FlowChapter />
        </ChapterContext.Provider>
      ))}
      <FlowChaptersAdd onClick={() => open()} />
    </div>
  );
}
