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
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import isAstralAuth from '@/(utils)/isAuth';
import {
  ContextForSpaceProgress,
  useControllerForSpaceProgress,
} from './(controller)/progress/main';
import { SpaceProgressShareView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const user = useGlobalUser((state) => state.user);
  const progressController = useControllerForSpaceProgress();
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

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForSpaceProgress.Provider value={progressController}>
        <ContextForSpaceMain.Provider value={spaceController}>
          <ContextForChapterSceneList.Provider value={sceneListController}>
            <ContextForSceneIdeaList.Provider value={ideaListController}>
              <ContextForSpaceChapterList.Provider
                value={chapterListController}
              >
                <ContextForChapterSessionList.Provider
                  value={sessionListController}
                >
                  <SpaceProgressShareView />
                </ContextForChapterSessionList.Provider>
              </ContextForSpaceChapterList.Provider>
            </ContextForSceneIdeaList.Provider>
          </ContextForChapterSceneList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForSpaceProgress.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
