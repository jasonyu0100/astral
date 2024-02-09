import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';
import { DraftModalContext } from '@/(cosmos)/(modals)/draft-modal/main';
import { useContext } from 'react';
import { DraftContext } from '../../page';
import { DraftChaptersLeftButton } from './left/main';
import { DraftChaptersRightButton } from './right/main';
import DraftChaptersAdd from './row/add/main';
import { DraftChapter } from './row/item/main';
import { DraftChaptersRow } from './row/main';

export function DraftChapters() {
  const { chapters } = useContext(DraftContext);
  const { addChapterModal } = useContext(DraftModalContext);

  return (
    <Layer
      displayName={DraftChapters.name}
      sizeStyle='w-full h-[80px]'
      backgroundStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      <DraftChaptersLeftButton />
      <DraftChaptersRow>
        {chapters.map((chapter) => (
          <DraftChapter chapter={chapter} />
        ))}
        <DraftChaptersAdd onClick={() => addChapterModal.open()} />
      </DraftChaptersRow>
      <DraftChaptersRightButton />
    </Layer>
  );
}
