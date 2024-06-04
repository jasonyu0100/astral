import { useContext } from 'react';
import { IdeaContext } from '@/(model)/space/chapter/scene/idea/main';
import MapHeaderTitle from '../../../common/title/main';

export function MapHeaderIdeaCenter() {
  const idea = useContext(IdeaContext);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{idea.variant} - {idea.title}</MapHeaderTitle>
    </div>
  );
}
