import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomeCreateCreateSpace } from '../../../../controller/main';
import { HomeCreateCreateFromSourceEditChapter } from './chapter/main';

export function HomeCreateCreateFromSourceEditStructure() {
  const createSpaceController = useContext(ContextForHomeCreateCreateSpace);

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {createSpaceController.state.templateProjectChapters.map(
        (chapter, index) => (
          <ContextForIndexable.Provider value={index}>
            <ContextForTemplateChapter.Provider value={chapter} key={index}>
              <HomeCreateCreateFromSourceEditChapter />
            </ContextForTemplateChapter.Provider>
          </ContextForIndexable.Provider>
        ),
      )}
    </div>
  );
}
