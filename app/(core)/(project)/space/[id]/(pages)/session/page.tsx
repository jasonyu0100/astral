'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/controller/space/chapter/scene/idea/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/controller/space/chapter/scene/list';
import {
  ContextForChapterSessionList,
  useControllerForChapterSessionList,
} from '@/(server)/controller/space/chapter/session/list';
import {
  ContextForSessionUpdateListFromChapter,
  useControllerForSessionUpdateListFromChapter,
} from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import {
  ContextForSessionUpdateList,
  useControllerForSessionUpdateList,
} from '@/(server)/controller/space/chapter/session/update/list-from-session';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import isAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import {
  ContextForSpaceSessionController,
  useControllerForSpaceSessionController,
} from './controller/space-session/main';
import { SpaceSessionShareView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session');
  const chapterId = searchParams.get('chapter');

  const user = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const sessionListController = useControllerForChapterSessionList(
    chapterListController.state.objId,
    sessionId,
  );
  const updateOfChapterListController =
    useControllerForSessionUpdateListFromChapter(
      chapterListController.state.objId,
    );
  const spaceSessionController = useControllerForSpaceSessionController();
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
                <ContextForSessionUpdateListFromChapter.Provider
                  value={updateOfChapterListController}
                >
                  <ContextForSessionUpdateList.Provider
                    value={updateListController}
                  >
                    <ContextForSpaceSessionController.Provider
                      value={spaceSessionController}
                    >
                      <SpaceSessionShareView />
                    </ContextForSpaceSessionController.Provider>
                  </ContextForSessionUpdateList.Provider>
                </ContextForSessionUpdateListFromChapter.Provider>
              </ContextForChapterSessionList.Provider>
            </ContextForSpaceChapterList.Provider>
          </ContextForSceneIdeaList.Provider>
        </ContextForChapterSceneList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
