import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForFlowCurrentCreateSpace } from '../../../../controller/main';
import { FlowCurrentCreateSpaceEditChapter } from './chapter/main';

export function FlowCurrentCreateSpaceEditStructure() {
  const { state: pageTwo } = useContext(ContextForFlowCurrentCreateSpace);
  const { templateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {templateProjectChapters.map((chapter, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForTemplateChapter.Provider value={chapter} key={index}>
            <FlowCurrentCreateSpaceEditChapter />
          </ContextForTemplateChapter.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
