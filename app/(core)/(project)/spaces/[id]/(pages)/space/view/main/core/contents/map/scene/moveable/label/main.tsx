import { ContextForSpacesSpace } from '@/(core)/(project)/spaces/[id]/(pages)/space/controller/main';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext, useState } from 'react';

export function SpacesSpaceIdeaLabel() {
  const index = useContext(ContextForIndexable);
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const ideaObj = useContext(ContextForIdeaObj);
  const [title, setTitle] = useState(ideaObj.title);

  return (
    <div className='absolute bottom-[-4rem] flex w-full flex-col items-center justify-center space-y-[1rem]'>
      <GlassWindowFrame className='p-[0.5rem] px-[1rem]'>
        <GlassWindowContents
          className={ctwn('flex items-center justify-center rounded-full')}
        >
          <input
            className='w-[100px] bg-transparent text-sm font-bold text-slate-300 outline-none'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => {
              ideaListController.actions.editActions.edit(ideaObj.id, {
                title,
              });
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
