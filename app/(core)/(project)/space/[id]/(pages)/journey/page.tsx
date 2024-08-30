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
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import isAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import {
  ContextForSpaceJourney,
  useControllerForSpaceJourney,
} from './controller/main';
import { SpaceJourneyModals } from './modal/controller/main';
import { SpaceJourneyView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const sceneId = searchParams.get('scene');
  const chapterId = searchParams.get('chapter');

  const user = useGlobalUser((state) => state.user);
  const progressController = useControllerForSpaceJourney();
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
    sceneId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const sessionListController = useControllerForChapterSessionList(
    chapterListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForSpaceJourney.Provider value={progressController}>
        <ContextForSpaceMain.Provider value={spaceController}>
          <ContextForChapterSceneList.Provider value={sceneListController}>
            <ContextForSceneIdeaList.Provider value={ideaListController}>
              <ContextForSpaceChapterList.Provider
                value={chapterListController}
              >
                <ContextForChapterSessionList.Provider
                  value={sessionListController}
                >
                  <SpaceJourneyModals>
                    <SpaceJourneyView />
                  </SpaceJourneyModals>
                </ContextForChapterSessionList.Provider>
              </ContextForSpaceChapterList.Provider>
            </ContextForSceneIdeaList.Provider>
          </ContextForChapterSceneList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForSpaceJourney.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
