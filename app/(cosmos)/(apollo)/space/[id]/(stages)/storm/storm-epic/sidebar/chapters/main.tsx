import { Layer } from '@/(common)/layer/main';
import { StormModalContext } from '@/(cosmos)/(modals)/storm-modal/main';
import { useContext } from 'react';
import { StormContext } from '../../../page';
import { StormChapterAdd } from './chapter/add/main';
import { StormChapter } from './chapter/main';

export function StormSidebarChapters() {
  const { chapters } = useContext(StormContext);
  const modalContext = useContext(StormModalContext);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layer
        displayName={StormSidebarChapters.name}
        sizeStyle='h-full w-full'
        className='flex flex-col overflow-auto divide-slate-700 divide-y-[1px]'
      >
          {chapters.map((chapter) => (
            <StormChapter chapter={chapter} />
          ))}
          <StormChapterAdd onClick={() => modalContext.addChapterModal.open()} />
      </Layer>
    </div>
  );
}
