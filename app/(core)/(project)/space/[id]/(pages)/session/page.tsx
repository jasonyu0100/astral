'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterSessionList,
  useControllerForChapterSessionList,
} from '@/(server)/(controller)/space/chapter/session/list';
import {
  ContextForChapterSessionUpdateList,
  useControllerForChapterItemList,
} from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceSessionShareView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const updateListController = useControllerForChapterSessionList(
    chapterListController.state.objId,
  );
  const sessionUpdateListController = useControllerForChapterItemList(
    chapterListController.state.objId,
  );

  return (
    <ContextForSpaceMain.Provider value={spaceController}>
      <ContextForSpaceChapterList.Provider value={chapterListController}>
        <ContextForChapterSessionList.Provider value={updateListController}>
          <ContextForChapterSessionUpdateList.Provider
            value={sessionUpdateListController}
          >
            <SpaceSessionShareView />
          </ContextForChapterSessionUpdateList.Provider>
        </ContextForChapterSessionList.Provider>
      </ContextForSpaceChapterList.Provider>
    </ContextForSpaceMain.Provider>
  );
}

export default isVerseAuth(Page);
