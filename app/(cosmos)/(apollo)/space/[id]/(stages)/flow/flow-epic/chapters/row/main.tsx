import { FlowModalContext } from '@/(cosmos)/(modals)/flow-modal/main';
import { useContext } from 'react';
import { FlowContext } from '../../../page';
import FlowChaptersAdd from './add/main';
import { FlowChapter } from './item/main';

export function FlowChaptersRow() {
  const { chapters } = useContext(FlowContext);
  const modalContext = useContext(FlowModalContext);
  const { open } = modalContext.addChapterModal;

  return (
    <div className='flex h-full flex-grow flex-row items-center space-x-[3px] overflow-auto'>
      {chapters.map((chapter) => (
        <FlowChapter chapter={chapter} />
      ))}
      <FlowChaptersAdd onClick={() => open()} />
    </div>
  );
}
