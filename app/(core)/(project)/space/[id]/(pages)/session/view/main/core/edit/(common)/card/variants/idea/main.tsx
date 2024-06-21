import { useControllerForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionEditCard } from '../../main';

export function SpaceSessionCardIdea() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const ideaController = useControllerForSceneIdeaMain(
    sessionUpdate?.ideaId || '',
  );

  return (
    <SpaceSessionEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {ideaController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Idea</p>
    </SpaceSessionEditCard>
  );
}
