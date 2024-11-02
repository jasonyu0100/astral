import { useControllerForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { FileElement } from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { TextElement } from '@/architecture/model/elements/text/main';
import { UrlElement } from '@/architecture/model/elements/url/main';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { ElementResource } from '@/components/element/resource/main';
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
