import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function SpaceJourneyListItem() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <li data-id={idea.id} className='drag-item'>
      <GlassWindowFrame
        className='w-full p-[1rem]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='flex flex-col space-y-[1rem] text-slate-300'>
          <p className='font-bold text-slate-300'>{idea.title}</p>
          {idea.variant === ElementVariant.FILE && (
            <img src={idea.fileElem?.src} />
          )}
          {idea.variant === ElementVariant.TEXT && (
            <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
              {idea.textElem?.text}
            </div>
          )}
          {idea.variant === ElementVariant.URL && (
            <iframe
              onDrag={(e) => e.stopPropagation()}
              src={idea.urlElem?.url}
              title='YouTube video player'
            />
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </li>
  );
}
