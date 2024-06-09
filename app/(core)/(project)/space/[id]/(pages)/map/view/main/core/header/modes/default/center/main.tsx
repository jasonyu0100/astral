import { useContext } from 'react';
import MapHeaderTitle from '../../../common/title/main';
import { ContextForSpaceChapterList } from '@/(model)/(controller)/space/chapter/list';
import { ContextForChapterSceneList } from '@/(model)/(controller)/space/chapter/scene/list';

export function DefaultCenter() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const part = sceneListController.state.currentObj;
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapter = chapterListController.state.currentObj;
  const headerTitle =
    part && chapter
      ? `${chapter?.title} - ${part?.title}`
      : `${chapter?.title} - None`;

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{headerTitle}</MapHeaderTitle>
    </div>
  );
}
