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
import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForUserObj } from '@/(server)/model/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import { useEffect } from 'react';
import { ConversationalSearchView } from './(core)/view';
import {
  ContextForConversationalSearch,
  useControllerForConversationalSearch,
} from './controller/chat/main';

export default function Page() {
  const userController = useControllerForUserMain(
    'a0ec7741-b75a-4b2a-aa19-735f5faa47b5',
  );
  const spaceListController = useControllerForSpaceList(
    userController.state.objId,
  );
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
        userController.state.objId,
        chapterListController.state.objId,
      )
      .then((scene) => {
        conversationListController.actions.createActions
          .createConversation(userController.state.objId, scene.id)
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
    <ContextForUserObj.Provider value={userController.state.obj}>
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
    </ContextForUserObj.Provider>
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
