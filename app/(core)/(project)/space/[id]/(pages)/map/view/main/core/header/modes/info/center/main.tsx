import { useContext } from 'react';
import MapHeaderTitle from '../../../common/title/main';
import { ContextForChapterSceneList } from '@/(model)/(controller)/space/chapter/scene/list';
import { ContextForSpaceChapterList } from '@/(model)/(controller)/space/chapter/list';

export function InfoCenter() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const sceneObj = sceneListController.state.currentObj;
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapter = chapterListController.state.currentObj;
  const headerTitle =
    sceneObj && chapter
      ? `${sceneObj?.title} - ${chapter?.title}`
      : 'None';

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{headerTitle}</MapHeaderTitle>
    </div>
  );
}
