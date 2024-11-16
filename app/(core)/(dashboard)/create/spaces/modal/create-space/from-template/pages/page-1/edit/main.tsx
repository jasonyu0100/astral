import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForCreateSpacesCreateSpace } from '../../../../controller/main';
import { CreateSpacesCreateSpaceEditChapter } from './chapter/main';

export function CreateSpacesCreateSpaceEditStructure() {
  const { state: pageTwo } = useContext(ContextForCreateSpacesCreateSpace);
  const { templateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {templateProjectChapters.map((chapter, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForTemplateChapter.Provider value={chapter} key={index}>
            <CreateSpacesCreateSpaceEditChapter />
          </ContextForTemplateChapter.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
