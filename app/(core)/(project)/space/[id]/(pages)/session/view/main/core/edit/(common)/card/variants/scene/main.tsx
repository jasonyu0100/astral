import { useControllerForChapterSceneMain } from '@/(server)/(controller)/space/chapter/scene/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionEditCard } from '../../main';

export function SpaceSessionCardScene() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const sceneController = useControllerForChapterSceneMain(
    sessionUpdate?.sceneId || '',
  );

  return (
    <SpaceSessionEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {sceneController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Scene</p>
    </SpaceSessionEditCard>
  );
}
