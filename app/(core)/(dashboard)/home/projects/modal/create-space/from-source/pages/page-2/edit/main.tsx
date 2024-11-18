import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomeProjectsCreateSpace } from '../../../../controller/main';
import { HomeProjectsCreateFromSourceEditChapter } from './chapter/main';

export function HomeProjectsCreateFromSourceEditStructure() {
  const createSpaceController = useContext(ContextForHomeProjectsCreateSpace);

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {createSpaceController.state.templateProjectChapters.map(
        (chapter, index) => (
          <ContextForIndexable.Provider value={index}>
            <ContextForTemplateChapter.Provider value={chapter} key={index}>
              <HomeProjectsCreateFromSourceEditChapter />
            </ContextForTemplateChapter.Provider>
          </ContextForIndexable.Provider>
        ),
      )}
    </div>
  );
}
