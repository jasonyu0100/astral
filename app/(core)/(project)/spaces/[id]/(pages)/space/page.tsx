'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSceneConversationList,
  useControllerForSceneConversationList,
} from '@/(server)/controller/space/chapter/scene/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/controller/space/chapter/scene/list';
import {
  ContextForSceneMemberList,
  useControllerForSceneMemberList,
} from '@/(server)/controller/space/chapter/scene/member/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import {
  ContextForSpacesSpace,
  useControllerForSpacesSpace,
} from './controller/main';
import { SpacesSpaceModals } from './modal/controller/main';
import { SpacesSpaceView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const setSpace = useGlobalSpace((state) => state.setSpace);

  const searchParams = useSearchParams();
  const sceneId = searchParams.get('scene');
  const chapterId = searchParams.get('chapter');

  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceMainController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
    chapterId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
    sceneId,
  );
  const sceneMemberListController = useControllerForSceneMemberList(
    sceneListController.state.objId,
  );
  const conversationListController = useControllerForSceneConversationList(
    sceneListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setSpace(spaceMainController.state.obj);
    }
  }, [spaceMainController.state.obj]);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterSceneList.Provider value={sceneListController}>
            <ContextForSceneMemberList.Provider
              value={sceneMemberListController}
            >
              <ContextForSceneConversationList.Provider
                value={conversationListController}
              >
                <ContextForConversationMessageList.Provider
                  value={messageListController}
                >
                  <LoadingWrapper>
                    <SpacesSpaceControllerWrapper>
                      <SpacesSpaceModals>
                        <SpacesSpaceView />
                      </SpacesSpaceModals>
                    </SpacesSpaceControllerWrapper>
                  </LoadingWrapper>
                </ContextForConversationMessageList.Provider>
              </ContextForSceneConversationList.Provider>
            </ContextForSceneMemberList.Provider>
          </ContextForChapterSceneList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function SpacesSpaceControllerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const spaceChatController = useControllerForSpacesSpace();
  return (
    <ContextForSpacesSpace.Provider value={spaceChatController}>
      {children}
    </ContextForSpacesSpace.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
