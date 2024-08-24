'use client';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/(controller)/space/chapter/scene/idea/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/(controller)/space/chapter/scene/list';
import {
  ContextForChapterSessionList,
  useControllerForChapterSessionList,
} from '@/(server)/(controller)/space/chapter/session/list';
import {
  ContextForSessionUpdateOfChapterList,
  useControllerForSessionUpdateOfChapterList,
} from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import {
  ContextForSessionUpdateList,
  useControllerForSessionUpdateList,
} from '@/(server)/(controller)/space/chapter/session/update/list';
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
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const sessionListController = useControllerForChapterSessionList(
    chapterListController.state.objId,
  );
  const updateOfChapterListController =
    useControllerForSessionUpdateOfChapterList(
      chapterListController.state.objId,
    );
  const spaceSessionController = useControllerForSpaceProgressController();
  const updateListController = useControllerForSessionUpdateList(
    sessionListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForSpaceMain.Provider value={spaceController}>
        <ContextForChapterSceneList.Provider value={sceneListController}>
          <ContextForSceneIdeaList.Provider value={ideaListController}>
            <ContextForSpaceChapterList.Provider value={chapterListController}>
              <ContextForChapterSessionList.Provider
                value={sessionListController}
              >
                <ContextForSessionUpdateOfChapterList.Provider
                  value={updateOfChapterListController}
                >
                  <ContextForSessionUpdateList.Provider
                    value={updateListController}
                  >
                    <ContextForSpaceProgressController.Provider
                      value={spaceSessionController}
                    >
                      <SpaceProgressShareView />
                    </ContextForSpaceProgressController.Provider>
                  </ContextForSessionUpdateList.Provider>
                </ContextForSessionUpdateOfChapterList.Provider>
              </ContextForChapterSessionList.Provider>
            </ContextForSpaceChapterList.Provider>
          </ContextForSceneIdeaList.Provider>
        </ContextForChapterSceneList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isVerseAuth(Page);
