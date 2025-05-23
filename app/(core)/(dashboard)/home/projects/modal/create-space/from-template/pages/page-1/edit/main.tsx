import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomeProjectsCreateSpace } from '../../../../controller/main';
import { HomeProjectsCreateSpaceEditChapter } from './chapter/main';

export function HomeProjectsCreateSpaceEditStructure() {
  const { state: pageTwo } = useContext(ContextForHomeProjectsCreateSpace);
  const { templateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {templateProjectChapters.map((chapter, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForTemplateChapter.Provider value={chapter} key={index}>
            <HomeProjectsCreateSpaceEditChapter />
          </ContextForTemplateChapter.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
