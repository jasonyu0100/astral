import { Layer } from '@/(common)/layer/main';
import { StormModalContext } from '@/(verses)/(modals)/storm-modal/main';
import { useContext } from 'react';
import { StormContext } from '../../../page';
import { StormChapterAdd } from './chapter/add/main';
import { StormChapter } from './chapter/main';
import { ChapterContext } from '@/(ouros)/(model)/space/chapter/main';

export function StormSidebarChapters() {
  const { chapters } = useContext(StormContext);
  const modalContext = useContext(StormModalContext);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layer
        displayName={StormSidebarChapters.name}
        sizeStyle='h-full w-full'
        className='flex flex-col divide-y-[1px] divide-slate-700 overflow-auto'
      >
        {chapters.map((chapter) => (
          // eslint-disable-next-line react/jsx-key
          <ChapterContext.Provider value={chapter}>
            <StormChapter />
          </ChapterContext.Provider>
        ))}
        <StormChapterAdd onClick={() => modalContext.addChapterModal.open()} />
      </Layer>
    </div>
  );
}
