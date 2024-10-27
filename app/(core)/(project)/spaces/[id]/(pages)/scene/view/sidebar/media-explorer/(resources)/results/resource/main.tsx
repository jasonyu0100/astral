import { ElementResource } from '@/components/element/resource/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { FileElement } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElement } from '@/server/model/elements/text/main';
import { UrlElement } from '@/server/model/elements/url/main';
import { ContextForCollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import {
  getFileIdeaBounds,
  getTextIdeaBounds,
  getUrlIdeaBounds,
} from '@/utils/bounds';
import { useContext } from 'react';

export function SpacesSceneResourceResource() {
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
    let idea;
    if (resource.variant === ElementVariant.FILE) {
      const file = resource.fileElem || ({} as FileElement);
      const { width, height } = await getFileIdeaBounds(file);

      idea =
        await ideaListController.actions.createActions.createIdeaFromFileElement(
          loggedInUser?.id,
          sceneListController.state.objId,
          resource.title,
          resource.description,
          Math.ceil(Math.random() * 200),
          Math.ceil(Math.random() * 200),
          width,
          height,
          file,
          ideaListController.state.objs.length,
        );
    } else if (resource.variant === ElementVariant.TEXT) {
      const text = resource.textElem || ({} as TextElement);
      const { width, height } = await getTextIdeaBounds(text);

      idea =
        await ideaListController.actions.createActions.createIdeaFromTextElement(
          loggedInUser?.id,
          sceneListController.state.objId,
          resource.title,
          resource.description,
          Math.ceil(Math.random() * 200),
          Math.ceil(Math.random() * 200),
          width,
          height,
          text,
          ideaListController.state.objs.length,
        );
    } else if (resource.variant === ElementVariant.URL) {
      const url = resource.urlElem || ({} as UrlElement);
      const { width, height } = await getUrlIdeaBounds(url);

      idea =
        await ideaListController.actions.createActions.createIdeaFromUrlElement(
          loggedInUser?.id,
          sceneListController.state.objId,
          resource.title,
          resource.description,
          Math.ceil(Math.random() * 200),
          Math.ceil(Math.random() * 200),
          width,
          height,
          resource.urlElem || ({} as UrlElement),
          ideaListController.state.objs.length,
        );
    }

    await reviewactivityListController.actions.createActions.createFromChapterSceneIdea(
      loggedInUser?.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneListController.state.objId,
      idea?.id || '',
    );
  }

  return (
    <div
      className='relative w-full cursor-pointer'
      onClick={() => {
        addResourceToScene();
      }}
    >
      <ElementResource />
    </div>
  );
}
