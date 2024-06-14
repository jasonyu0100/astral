import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceStormChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { SpaceStormContainerActive } from './header/container/active/main';
import { SpaceStormInactiveContainer } from './header/container/inactive/main';
import { SpaceStormChapterHeader } from './header/main';

export function SpaceStormSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chatListController = useContext(ContextForChapterChatList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <SpaceStormContainerActive>
          <SpaceStormChapterHeader />
          {chatListController.state.objs.map((chat, index) => (
            <ContextForIndexable.Provider value={index} key={chat.id}>
              <ContextForChatObj.Provider value={chat} key={chat.id}>
                <StormChapterChat key={chat.id} />
              </ContextForChatObj.Provider>
            </ContextForIndexable.Provider>
          ))}
          <SpaceStormChatAdd />
        </SpaceStormContainerActive>
      ) : (
        <SpaceStormInactiveContainer>
          <SpaceStormChapterHeader />
        </SpaceStormInactiveContainer>
      )}
    </>
  );
}
