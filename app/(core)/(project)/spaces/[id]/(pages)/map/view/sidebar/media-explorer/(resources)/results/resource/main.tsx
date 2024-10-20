import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem } from '@/(server)/model/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { ElementResource } from '@/ui/element/resource/main';
import { getFileIdeaBounds } from '@/utils/bounds';
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

  async function addResourceToScene() {
    const file = resource.fileElem || ({} as FileElem);
    const { width, height } = await getFileIdeaBounds(file);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromFileElement(
        loggedInUser?.id,
        sceneListController.state.objId,
        resource.title,
        resource.description,
        0,
        0,
        width,
        height,
        resource.fileElem || ({} as FileElem),
        ideaListController.state.objs.length,
      );
    await reviewactivityListController.actions.createActions.createFromChapterSceneIdea(
      loggedInUser?.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneListController.state.objId,
      idea.id,
    );
  }

  return (
    <div
      className='cursor-pointer'
      onClick={() => {
        addResourceToScene();
      }}
    >
      <ElementResource />
    </div>
  );
}
