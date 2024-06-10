import { useContext } from 'react';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import MapHeaderTitle from '../../../common/title/main';

export function MapHeaderIdeaCenter() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{idea.variant} - {idea.title}</MapHeaderTitle>
    </div>
  );
}
