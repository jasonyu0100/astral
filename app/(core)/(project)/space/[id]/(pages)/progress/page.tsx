'use client';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterSessionList,
  useControllerForChapterSessionList,
} from '@/(server)/(controller)/space/chapter/session/list';
import {
  ContextForSessionUpdateOfChapterList,
  useControllerForSessionUpdateOfChapterList,
} from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import isVerseAuth from '@/(utils)/isAuth';
import {
  ContextForSpaceProgressController,
  useControllerForSpaceProgressController,
} from './(controller)/space-session/main';
import { SpaceProgressShareView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const user = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const updateListController = useControllerForChapterSessionList(
    chapterListController.state.objId,
  );
  const sessionUpdateListController =
    useControllerForSessionUpdateOfChapterList(
      chapterListController.state.objId,
    );
  const spaceSessionController = useControllerForSpaceProgressController();

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForSpaceMain.Provider value={spaceController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterSessionList.Provider value={updateListController}>
            <ContextForSessionUpdateOfChapterList.Provider
              value={sessionUpdateListController}
            >
              <ContextForSpaceProgressController.Provider
                value={spaceSessionController}
              >
                <SpaceProgressShareView />
              </ContextForSpaceProgressController.Provider>
            </ContextForSessionUpdateOfChapterList.Provider>
          </ContextForChapterSessionList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isVerseAuth(Page);
