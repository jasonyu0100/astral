import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import { useContext } from 'react';
import { ContextForChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { ActiveChapterHeaderContainer } from './header/container/active/main';
import { InactiveChapterHeaderContainer } from './header/container/inactive/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';

export function StormChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chatListController = useContext(ContextForChapterChatList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <ActiveChapterHeaderContainer>
          <StormChapterHeader />
          {chatListController.state.objs.map((chat, index) => (
            <ContextForIndexable.Provider value={index} key={chat.id}>
              <ContextForChatObj.Provider value={chat} key={chat.id}>
                <StormChapterChat key={chat.id} />
              </ContextForChatObj.Provider>
            </ContextForIndexable.Provider>
          ))}
          <StormChapterChatAdd />
        </ActiveChapterHeaderContainer>
      ) : (
        <InactiveChapterHeaderContainer>
          <StormChapterHeader />
        </InactiveChapterHeaderContainer>
      )}
    </>
  );
}
