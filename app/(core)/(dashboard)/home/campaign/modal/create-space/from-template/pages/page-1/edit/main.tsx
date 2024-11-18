import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForTemplateChapter } from '@/templates/space/main';
import { useContext } from 'react';
import { ContextForHomeCampaignCreateSpace } from '../../../../controller/main';
import { HomeCampaignCreateSpaceEditChapter } from './chapter/main';

export function HomeCampaignCreateSpaceEditStructure() {
  const { state: pageTwo } = useContext(ContextForHomeCampaignCreateSpace);
  const { templateProjectChapters } = pageTwo;

  return (
    <div className='flex w-full flex-col pb-[1rem]'>
      {templateProjectChapters.map((chapter, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForTemplateChapter.Provider value={chapter} key={index}>
            <HomeCampaignCreateSpaceEditChapter />
          </ContextForTemplateChapter.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
