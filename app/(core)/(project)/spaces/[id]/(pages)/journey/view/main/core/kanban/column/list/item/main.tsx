import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { glassFx, roundedFx } from '@/style/data';
import { ElementIdeaPreview } from '@/ui/element/idea/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpacesJourneyListItem() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <li data-id={idea.id} className='drag-item'>
      <GlassWindowFrame
        className='w-full p-[1rem]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='flex flex-col space-y-[1rem] text-slate-300'>
          <p className='font-bold text-slate-300'>{idea.title}</p>
          <ElementIdeaPreview />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </li>
  );
}
