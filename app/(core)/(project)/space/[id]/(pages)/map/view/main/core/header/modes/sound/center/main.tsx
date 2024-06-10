import { useContext } from 'react';
import MapHeaderTitle from '../../../common/title/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSpaceList } from '@/(server)/(controller)/space/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function SoundCenter() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const part = ideaListController.state.currentObj;
  const chapter = chapterListController.state.currentObj;
  const headerTitle =
    part && chapter ? `${part?.title} - ${chapter?.title}` : 'None';

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <MapHeaderTitle>{headerTitle}</MapHeaderTitle>
    </div>
  );
}
