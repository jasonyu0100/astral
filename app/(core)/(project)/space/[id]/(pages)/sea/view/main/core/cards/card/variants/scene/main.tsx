import { useControllerForChapterSceneMain } from '@/(server)/(controller)/space/chapter/scene/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaWorkCard } from '../../main';

export function SpaceSeaCardScene() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const sceneController = useControllerForChapterSceneMain(updateItem.sceneId);

  return (
    <SpaceSeaWorkCard>
      <p className='text-sm font-bold text-slate-300'>
        {sceneController.state.obj.title}
      </p>
      <p className='text-xs font-light text-slate-300'>New Scene</p>
    </SpaceSeaWorkCard>
  );
}
