'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceSeaShareView } from './view/view';

function Page({ params }: { params: { id: string } }) {
  const chapterListController = useControllerForSpaceChapterList(params.id);

  return (
    <ContextForSpaceChapterList.Provider value={chapterListController}>
      <SpaceSeaShareView />
    </ContextForSpaceChapterList.Provider>
  );
}

export default isVerseAuth(Page);
