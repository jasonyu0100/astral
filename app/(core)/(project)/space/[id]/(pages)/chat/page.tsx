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
import isAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import { ConversationRole } from './data';
import { SpaceChatModals } from './modal/controller/main';
import { SpaceChatView } from './view/main';

interface Controller {
  role: string;
  setRole: (role: string) => void;
}

export const ContextForIdeaController = createContext<Controller>(
  {} as Controller,
);

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

  const [role, setRole] = useState<string>(ConversationRole.Producer);

  const ideaControllerContext = {
    role,
    setRole,
  };

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setSpace(spaceMainController.state.obj);
    }
  }, [spaceMainController.state.obj]);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForIdeaController.Provider value={ideaControllerContext}>
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
                    <SpaceChatModals>
                      <SpaceChatView />
                    </SpaceChatModals>
                  </ContextForConversationMessageList.Provider>
                </ContextForSceneConversationList.Provider>
              </ContextForSceneMemberList.Provider>
            </ContextForChapterSceneList.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForIdeaController.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
