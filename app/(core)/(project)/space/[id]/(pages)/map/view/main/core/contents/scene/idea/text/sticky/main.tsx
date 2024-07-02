import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapTextStickyIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <div
      className='aspect-square h-full bg-yellow-500 shadow-lg'
      style={{ padding: '10%' }}
    >
      <p className='text-xs font-bold text-black'>{ideaObj.textElem?.text}</p>
    </div>
  );
}
