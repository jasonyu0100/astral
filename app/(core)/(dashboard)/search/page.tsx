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
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/(server)/controller/space/list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import { useEffect } from 'react';
import { ConversationalSearchView } from './(core)/view';
import {
  ContextForConversationalSearch,
  useControllerForConversationalSearch,
} from './controller/chat/main';

export default function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(loggedInUser.id);
  const chapterListController = useControllerForSpaceChapterList(
    spaceListController.state.listId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
  );
  const conversationListController = useControllerForSceneConversationList(
    sceneListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  useEffect(() => {
    sceneListController.actions.createActions
      .createScene(
        'Conversational Search Query',
        'Conversational Search Query',
        '',
        loggedInUser.id,
        chapterListController.state.objId,
      )
      .then((scene) => {
        conversationListController.actions.createActions
          .createConversation(loggedInUser.id, scene.id)
          .then((conversation) => {
            messageListController.actions.createActions.sendAgentMessage(
              'openAi',
              scene.id,
              conversation.id,
              'Hello world',
            );
          });
      });
  }, []);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceList.Provider value={spaceListController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterSceneList.Provider value={sceneListController}>
            <ContextForSceneConversationList.Provider
              value={conversationListController}
            >
              <ContextForConversationMessageList.Provider
                value={messageListController}
              >
                <LoadingWrapper>
                  <ConversationalSearchWrapper>
                    <ConversationalSearchView />
                  </ConversationalSearchWrapper>
                </LoadingWrapper>
              </ContextForConversationMessageList.Provider>
            </ContextForSceneConversationList.Provider>
          </ContextForChapterSceneList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export function ConversationalSearchWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversationalSearchController = useControllerForConversationalSearch();

  return (
    <ContextForConversationalSearch.Provider
      value={conversationalSearchController}
    >
      {children}
    </ContextForConversationalSearch.Provider>
  );
}
