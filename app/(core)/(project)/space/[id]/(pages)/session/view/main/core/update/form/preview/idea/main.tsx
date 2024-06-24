import { useControllerForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceSessionUpdatePreviewIdea() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const ideaController = useControllerForSceneIdeaMain(
    sessionUpdate?.ideaId || '',
  );

  return (
    <>
      <p className='text-xl font-bold text-slate-300'>
        {ideaController.state.obj.title}
      </p>
    </>
  );
}
