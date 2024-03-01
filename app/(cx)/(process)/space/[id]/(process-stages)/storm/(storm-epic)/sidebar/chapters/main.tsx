import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { StormModalContext } from '@/(modals)/(process)/storm-modal/main';
import { useContext } from 'react';
import { StormContext } from '../../../page';
import { StormChapterAdd } from './chapter/add/main';
import { StormChapter } from './chapter/main';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';

export function StormSidebarChapters() {
  const { chapters } = useContext(StormContext);
  const modalContext = useContext(StormModalContext);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassContainer
        displayName={StormSidebarChapters.name}
        sizeStyle='h-full w-full'
        className='flex flex-col overflow-auto'
      >
        {chapters.map((chapter) => (
          // eslint-disable-next-line react/jsx-key
          <ChapterContext.Provider value={chapter}>
            <StormChapter />
          </ChapterContext.Provider>
        ))}
        <StormChapterAdd onClick={() => modalContext.addChapterModal.open()} />
      </GlassContainer>
    </div>
  );
}
