import { useControllerForChapterSceneMain } from '@/(server)/(controller)/space/chapter/scene/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardScene() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const sceneController = useControllerForChapterSceneMain(updateItem.sceneId);

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {sceneController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Scene</p>
    </SpaceSeaEditCard>
  );
}
