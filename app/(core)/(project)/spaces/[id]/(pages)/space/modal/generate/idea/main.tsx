import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { ElementIdea } from '@/components/element/idea/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { useContext, useState } from 'react';

export function SpacesSpaceGeneratePostItem() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const ideaObj = useContext(ContextForIdeaObj);
  const [title, setTitle] = useState(ideaObj.title);

  return (
    <GlassWindowFrame className='flex-shrink-0'>
      <GlassWindowContents className='grid grid-cols-6 items-center gap-[1rem]'>
        <div className='col-span-2'>
          <ElementIdea />
        </div>
        <div className='col-span-4 flex h-full flex-col justify-end'>
          <AstralTextLineInput
            placeholder='Enter a title'
            value={title}
            onBlur={() => {
              ideaListController.actions.editActions.edit(ideaObj.id, {
                title: title,
              });
            }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
