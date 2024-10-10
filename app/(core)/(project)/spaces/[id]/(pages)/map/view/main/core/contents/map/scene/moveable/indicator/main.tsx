import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesMapIdeaIndicator() {
  const index = useContext(ContextForIndexable);
  const {
    actions: { checkContainsSelectedIdea },
  } = useContext(ContextForSpacesMap);
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
              checkContainsSelectedIdea(ideaObj),
          })}
        >
          <p className='font-bold text-white'>{index + 1}</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
