import { useControllerForChapterSceneMain } from '@/(server)/(controller)/space/chapter/scene/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceProgressUpdatePreviewScene() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const sceneController = useControllerForChapterSceneMain(
    sessionUpdate?.sceneId || '',
  );

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-xl font-bold text-slate-700'>
        {sceneController.state.obj.title}
        <br />
        {sceneController.state.obj.description}
      </p>
    </div>
  );
}
