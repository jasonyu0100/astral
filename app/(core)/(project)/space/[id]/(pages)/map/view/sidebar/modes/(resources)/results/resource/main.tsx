import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import {
  FileElem,
  FileElemVariant,
} from '@/(server)/(model)/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function SpaceMapResourceResource() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sessionUpdateListController =
    useControllerForSessionUpdateOfChapterList('');

  const resource = useContext(ContextForCollectionResourceObj);

  async function addResourceToScene() {
    const idea = await ideaListController.actions.createActions.createFromFile(
      loggedInUser.id,
      sceneListController.state.objId,
      resource.title,
      resource.description,
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 500),
      150,
      150,
      resource.fileElem || ({} as FileElem),
    );
    await sessionUpdateListController.actions.createActions.createFromChapterSceneIdea(
      loggedInUser.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneListController.state.objId,
      idea.id,
    );
  }

  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      {/* <p className='text-md font-bold text-slate-300'>{resource.title}</p> */}
      {resource.fileElem?.variant === FileElemVariant.IMAGE && (
        <img
          src={resource.fileElem?.src}
          className='cursor-pointer'
          onClick={() => {
            addResourceToScene();
          }}
        />
      )}
      {resource.fileElem?.variant === FileElemVariant.AUDIO && (
        <div
          onClick={() => {
            addResourceToScene();
          }}
        >
          <audio controls className='cursor-pointer'>
            <source src={resource.fileElem?.src} />
          </audio>
        </div>
      )}
      {resource.fileElem?.variant === FileElemVariant.VIDEO && (
        <video
          controls
          src={resource.fileElem?.src}
          className='cursor-pointer'
          onClick={() => {
            addResourceToScene();
          }}
        />
      )}
    </div>
  );
}
