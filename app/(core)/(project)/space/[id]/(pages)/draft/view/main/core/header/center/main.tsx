import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useContext } from 'react';

export function SpaceDraftHeaderCenter() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <p className='text-lg font-bold text-slate-300'>
        scene - {sceneListController.state.currentObj?.title}
      </p>
    </div>
  );
}
