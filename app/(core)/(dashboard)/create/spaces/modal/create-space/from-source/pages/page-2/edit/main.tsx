import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForCreateSpacesCreateSpace } from '../../../../controller/main';
import { CreateSpacesCreateFromSourceEditChapter } from './chapter/main';

export function CreateSpacesCreateFromSourceEditStructure() {
  const createSpaceController = useContext(ContextForCreateSpacesCreateSpace);

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {createSpaceController.state.templateProjectChapters.map(
        (chapter, index) => (
          <ContextForIndexable.Provider value={index}>
            <ContextForTemplateChapter.Provider value={chapter} key={index}>
              <CreateSpacesCreateFromSourceEditChapter />
            </ContextForTemplateChapter.Provider>
          </ContextForIndexable.Provider>
        ),
      )}
    </div>
  );
}
