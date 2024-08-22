import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { useContext } from 'react';
import { SpaceMapSaveIcon } from '../left/tools/save/main';

export function SpaceMapHeaderRight() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      <SpaceMapSaveIcon
        onClick={() => {
          ideaListController.actions.editActions.sync().then(() => {
            alert('save all');
          });
        }}
      />
    </div>
  );
}
