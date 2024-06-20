import { useControllerForSceneIdeaMain } from '@/(server)/(controller)/space/chapter/scene/idea/main';
import { useControllerForChapterSceneMain } from '@/(server)/(controller)/space/chapter/scene/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardIdea() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const sceneController = useControllerForChapterSceneMain(updateItem.sceneId);
  const ideaController = useControllerForSceneIdeaMain(updateItem.ideaId);

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {ideaController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Idea</p>
    </SpaceSeaEditCard>
  );
}
