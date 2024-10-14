import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem, FileElemVariant } from '@/(server)/model/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';

export function SpacesMapResourceResource() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const reviewactivityListController =
    useControllerForUserActivityListFromChapter(
      chapterListController.state.objId,
    );

  const resource = useContext(ContextForCollectionResourceObj);

  async function getFileBounds() {
    if (file.id === undefined) {
      return { width: 150, height: 150 };
    }

    let width = 150;
    let height = 150;

    if (file.variant === FileElemVariant.IMAGE) {
      width = 100;
      height = 100;
    } else if (file.variant === FileElemVariant.VIDEO) {
      width = 150;
      height = 100;
    } else if (file.variant === FileElemVariant.AUDIO) {
      width = 300;
      height = 50;
    }

    return { width, height };
  }

  async function addResourceToScene() {
    const { width, height } = await getFileBounds();

    const idea = await ideaListController.actions.createActions.createFromFile(
      loggedInUser.id,
      sceneListController.state.objId,
      resource.title,
      resource.description,
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 500),
      width,
      height,
      resource.fileElem || ({} as FileElem),
      ideaListController.state.objs.length,
    );
    await reviewactivityListController.actions.createActions.createFromChapterSceneIdea(
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
