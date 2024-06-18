'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceSeaShareView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(params.id);

  return (
    <ContextForSpaceMain.Provider value={spaceController}>
      <ContextForSpaceChapterList.Provider value={chapterListController}>
        <SpaceSeaShareView />
      </ContextForSpaceChapterList.Provider>
    </ContextForSpaceMain.Provider>
  );
}

export default isVerseAuth(Page);
