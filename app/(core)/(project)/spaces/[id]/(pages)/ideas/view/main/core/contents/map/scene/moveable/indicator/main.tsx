import { ContextForSpacesIdeas } from '@/(core)/(project)/spaces/[id]/(pages)/ideas/controller/main';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesIdeasIdeaIndicator() {
  const index = useContext(ContextForIndexable);
  const spacesSpaceController = useContext(ContextForSpacesIdeas);
  const ideaObj = useContext(ContextForIdeaObj);

  return (
    <div className='absolute bottom-[-3rem] flex w-full flex-row items-center justify-center'>
      <GlassWindowFrame
        className='h-[2rem] w-[2rem]'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className={ctwn('flex items-center justify-center rounded-full', {
            'animate-pulse-slow bg-blue-500':
              spacesSpaceController.actions.checkContainsSelectedIdea(ideaObj),
          })}
        >
          <p className='font-extraBold text-sm text-white'>{index + 1}</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
