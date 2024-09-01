import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceJourneySidebarIdeasListItem() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <GlassWindowFrame className='p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents className='flex flex-row items-center space-x-[1rem]'>
        <div
          key={idea.id}
          className='flex flex-col space-y-2 font-bold text-slate-300'
        >
          <div className='text-lg font-bold'>
            {idea.variant} - {idea.title}
          </div>
          <div className='text-sm font-light'>
            {idea.description || 'No description'}
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
