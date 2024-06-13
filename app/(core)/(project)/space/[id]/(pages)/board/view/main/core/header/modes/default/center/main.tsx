import { useContext } from 'react';
import BoardHeaderTitle from '../../../common/title/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';

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
      <BoardHeaderTitle>{headerTitle}</BoardHeaderTitle>
    </div>
  );
}
