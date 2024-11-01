'use client';
import { LoadingWrapper } from '@/components/loading/controller/main';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/server/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/server/controller/conversation/message/list';
import {
  ContextForIdeaSceneList,
  useControllerForIdeaSceneList,
} from '@/server/controller/scene/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/server/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/server/controller/space/main';
import { useControllerForUserMain } from '@/server/controller/user/main';
import { ContextForUserObj } from '@/server/model/user/main';
import PublicAstralPage from '@/utils/public-astral-page';
import { useContext, useEffect } from 'react';
import {
  ContextForConversationalSearch,
  useControllerForConversationalSearch,
} from './controller/chat/main';
import { ConversationalSearchView } from './results/core/view';

function Page() {
  const userController = useControllerForUserMain(
    'cf0b9d9f-896c-4d84-b982-957a3ca1234b',
  );
  const spaceMainController = useControllerForSpaceMain(
    '0acb9371-e277-4ee6-af4d-ee4744490318',
  );
  const chapterListController = useControllerForSpaceChapterList(
    '0acb9371-e277-4ee6-af4d-ee4744490318',
  );
  const sceneListController = useControllerForIdeaSceneList(
    chapterListController.state.objId,
  );
  const conversationListController = useControllerForChapterConversationList(
    sceneListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  return (
    <ContextForUserObj.Provider value={userController.state.obj}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForIdeaSceneList.Provider value={sceneListController}>
            <ContextForChapterConversationList.Provider
              value={conversationListController}
            >
              <ContextForConversationMessageList.Provider
                value={messageListController}
              >
                <LoadingWrapper>
                  <AstralChatPage>
                    <ConversationalSearchView />
                  </AstralChatPage>
                </LoadingWrapper>
              </ContextForConversationMessageList.Provider>
            </ContextForChapterConversationList.Provider>
          </ContextForIdeaSceneList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForUserObj.Provider>
  );
}

export function AstralChatPage({ children }: { children: React.ReactNode }) {
  const userId = 'cf0b9d9f-896c-4d84-b982-957a3ca1234b';
  const spaceController = useContext(ContextForSpaceMain);
  const conversationalSearchController = useControllerForConversationalSearch();
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );

  useEffect(() => {
    chapterListController.actions.createActions
      .createChapter(
        `Sale - ${new Date()}`,
        'Search Query',
        'Search Query',
        '',
        userId,
        spaceController.state.objId,
        0,
      )
      .then((chapter) => {
        sceneListController.actions.createActions
          .createScene(
            'Conversational Search Query',
            'Conversational Search Query',
            'Conversational Search Query',
            userId,
            chapter.id,
          )
          .then((scene) => {
            console.log(chapterListController.state.objId);
            conversationListController.actions.createActions
              .createConversation(userId, scene.id)
              .then((conversation) => {
                conversationalSearchController.actions.sendAgentMessage(
                  'astral',
                  `👋 Hi there! Welcome to Astral!
I’m your AI assistant, here to help you explore how Astral can supercharge your creative workflows.`,
                  conversation,
                );
              });
          });
      });
  }, []);

  return (
    <ContextForConversationalSearch.Provider
      value={conversationalSearchController}
    >
      {children}
    </ContextForConversationalSearch.Provider>
  );
}

export default PublicAstralPage(Page);
