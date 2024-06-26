import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function SpaceMapResourceThumbnail() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const resource = useContext(ContextForCollectionResourceObj);
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      <p className='text-md font-bold text-slate-300'>{resource.title}</p>
      <img
        src={resource.fileElem?.src}
        className='aspect-square cursor-pointer'
        onClick={() => {
          ideaListController.actions.createActions.createFromFile(
            loggedInUser.id,
            sceneListController.state.objId,
            resource.title,
            resource.description,
            0,
            0,
            300,
            300,
            resource.fileElem,
          );
        }}
      />
    </div>
  );
}
