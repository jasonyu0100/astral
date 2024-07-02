import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';

export function SpaceMapTextLineIdea() {
  const ideaObj = useContext(ContextForSceneIdeaObj);

  return (
    <div
      className='aspect-square h-full w-full flex-col items-center justify-center'
      style={{ padding: '10%' }}
    >
      <p className='font-bold text-slate-300'>{ideaObj.textElem?.text}</p>
    </div>
  );
}
