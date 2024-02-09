import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';
import { FlowChaptersLeftButton } from './left/main';
import { FlowChaptersRightButton } from './right/main';
import FlowChaptersAdd from './row/add/main';
import { FlowChapter } from './row/item/main';
import { FlowChaptersRow } from './row/main';
import { FlowModalContext } from '@/(cosmos)/(modals)/flow-modal/main';
import { useContext } from 'react';
import { FlowContext } from '../../page';

export function FlowChapters() {
  const { chapters } = useContext(FlowContext);
  const modalContext = useContext(FlowModalContext);
  const { open } = modalContext.addChapterModal;

  return (
    <Layer
      displayName={FlowChapters.name}
      sizeStyle='w-full h-[80px]'
      backgroundStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      <FlowChaptersLeftButton />
      <FlowChaptersRow>
        {chapters.map((chapter) => (
          <FlowChapter chapter={chapter} />
        ))}
        <FlowChaptersAdd onClick={() => open()} />
      </FlowChaptersRow>
      <FlowChaptersRightButton />
    </Layer>
  );
}
