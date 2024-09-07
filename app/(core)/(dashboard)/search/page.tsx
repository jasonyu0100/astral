'use client';
import { useControllerForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { useControllerForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { useControllerForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useControllerForSpaceList } from '@/(server)/controller/space/list';
import { useGlobalUser } from '@/logic/store/user/main';
import { useEffect } from 'react';

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

  console.log(chapterListController.state.currentObj);
  console.log(sceneListController.state.currentObj);
  console.log(conversationListController.state.objs);

  useEffect(() => {
    chapterListController.actions.createActions
      .createChapter(
        'Conversational Search Session',
        'Conversational Search Session',
        '',
        '',
        loggedInUser.id,
        spaceListController.state.objId,
        chapterListController.state.objs.length,
      )
      .then((chapter) => {
        sceneListController.actions.createActions
          .createScene(
            'Conversational Search Query',
            'Conversational Search Query',
            '',
            loggedInUser.id,
            chapter.id,
          )
          .then((scene) => {
            conversationListController.actions.createActions.createConversation(
              loggedInUser.id,
              scene.id,
            );
          });
      });
  }, []);

  return (
    <div className='flex flex-col'>
      <p className='font-bold text-slate-300'>Conversational Search</p>
      {messageListController.state.objs.map((message) => (
        <div className='font-bold text-slate-300'>{message.message}</div>
      ))}
    </div>
  );
}
