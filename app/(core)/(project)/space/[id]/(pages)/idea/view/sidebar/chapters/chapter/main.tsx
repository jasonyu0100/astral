import { ContextForChapterChatList } from '@/(server)/controller/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterChatObj } from '@/(server)/model/space/chapter/chat/main';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpaceIdeaChatAdd } from './chat/add/main';
import { ChatChapterChat } from './chat/main';
import { SpaceIdeaContainerActive } from './header/container/active/main';
import { SpaceIdeaInactiveContainer } from './header/container/inactive/main';
import { SpaceIdeaChapterHeader } from './header/main';

export function SpaceIdeaSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chatListController = useContext(ContextForChapterChatList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <SpaceIdeaContainerActive>
          <SpaceIdeaChapterHeader />
          {chatListController.state.objs.map((chat, index) => (
            <ContextForIndexable.Provider value={index} key={chat.id}>
              <ContextForChapterChatObj.Provider value={chat} key={chat.id}>
                <ChatChapterChat key={chat.id} />
              </ContextForChapterChatObj.Provider>
            </ContextForIndexable.Provider>
          ))}
          <SpaceIdeaChatAdd />
        </SpaceIdeaContainerActive>
      ) : (
        <SpaceIdeaInactiveContainer>
          <SpaceIdeaChapterHeader />
        </SpaceIdeaInactiveContainer>
      )}
    </>
  );
}
