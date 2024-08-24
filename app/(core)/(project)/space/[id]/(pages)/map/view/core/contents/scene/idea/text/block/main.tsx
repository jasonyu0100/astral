import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapTextBlockIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  // TBD

  return (
    <div className='h-full w-full flex-col items-center justify-center bg-white'>
      <textarea
        className='h-full w-full resize-none bg-transparent text-xs font-bold text-black outline-none'
        defaultValue={ideaObj.textElem?.text}
      />
    </div>
  );
}
