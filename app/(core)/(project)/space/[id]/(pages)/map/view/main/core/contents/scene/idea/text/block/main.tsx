import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapTextBlockIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <div
      className='h-full w-full flex-col items-center justify-center bg-white'
      style={{ padding: '10%' }}
    >
      <p className='text-xs font-bold text-black'>{ideaObj.textElem?.text}</p>
    </div>
  );
}
