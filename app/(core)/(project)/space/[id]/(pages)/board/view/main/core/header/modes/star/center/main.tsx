import { useContext } from 'react';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import BoardHeaderTitle from '../../../common/title/main';

export function BoardHeaderIdeaCenter() {
  const idea = useContext(ContextForSceneIdeaObj);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <BoardHeaderTitle>
        {idea.variant} - {idea.title}
      </BoardHeaderTitle>
    </div>
  );
}
