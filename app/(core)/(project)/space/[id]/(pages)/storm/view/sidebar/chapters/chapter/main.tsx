import { ContextForSpaceChapterObj } from '@/(model)/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import { useContext } from 'react';
import { ContextForChatObj } from '@/(model)/space/chapter/chat/main';
import { ChaptersHandlerContext } from '@/(model)/(controller)/(archive)/chapters/main';
import { ChatsHandlerContext } from '@/(model)/(controller)/(archive)/storm/chats/main';
import { ActiveChapterHeaderContainer } from './header/container/active/main';
import { InactiveChapterHeaderContainer } from './header/container/inactive/main';

export function StormChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chatsHandler = useContext(ChatsHandlerContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chats = chatsHandler.chats;
  const active = chapter.id === chaptersHandler.chapterId;

  return (
    <>
      {active ? (
        <ActiveChapterHeaderContainer>
          <StormChapterHeader />
          {chats.map((chat) => (
            <ContextForChatObj.Provider value={chat} key={chat.id}>
              <StormChapterChat key={chat.id} />
            </ContextForChatObj.Provider>
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
