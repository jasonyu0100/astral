import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomePersonalCreateSpace } from '../../../../controller/main';
import { HomePersonalCreateFromSourceEditChapter } from './chapter/main';

export function HomePersonalCreateFromSourceEditStructure() {
  const createSpaceController = useContext(ContextForHomePersonalCreateSpace);

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {createSpaceController.state.templateProjectChapters.map(
        (chapter, index) => (
          <ContextForIndexable.Provider value={index}>
            <ContextForTemplateChapter.Provider value={chapter} key={index}>
              <HomePersonalCreateFromSourceEditChapter />
            </ContextForTemplateChapter.Provider>
          </ContextForIndexable.Provider>
        ),
      )}
    </div>
  );
}
