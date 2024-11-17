import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomeCreateCreateSpace } from '../../../../controller/main';
import { HomeCreateCreateSpaceEditChapter } from './chapter/main';

export function HomeCreateCreateSpaceEditStructure() {
  const { state: pageTwo } = useContext(ContextForHomeCreateCreateSpace);
  const { templateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {templateProjectChapters.map((chapter, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForTemplateChapter.Provider value={chapter} key={index}>
            <HomeCreateCreateSpaceEditChapter />
          </ContextForTemplateChapter.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
