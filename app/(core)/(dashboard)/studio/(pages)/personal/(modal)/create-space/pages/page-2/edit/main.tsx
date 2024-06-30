import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/(server)/(templates)/space/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../(controller)/create-space/main';
import { CreateSpaceEditChapter } from './chapter/main';
import { CreateSpaceEditFooter } from './footer/main';

export function CreateSpaceEditStructure() {
  const { pageTwo } = useContext(ContextForCreateSpace);
  const { templateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {templateProjectChapters.map((chapter, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForTemplateChapter.Provider value={chapter} key={index}>
            <CreateSpaceEditChapter />
          </ContextForTemplateChapter.Provider>
        </ContextForIndexable.Provider>
      ))}
      <CreateSpaceEditFooter />
    </div>
  );
}
