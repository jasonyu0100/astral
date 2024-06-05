import { SpaceChapterContext } from '@/(model)/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import { useContext } from 'react';
import { SpaceChatContext } from '@/(model)/space/chapter/chat/main';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';
import { ChatsHandlerContext } from '@/(controller)/storm/chats/main';
import { ActiveChapterHeaderContainer } from './header/container/active/main';
import { InactiveChapterHeaderContainer } from './header/container/inactive/main';

export function StormChapter() {
  const chapter = useContext(SpaceChapterContext);
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
            <SpaceChatContext.Provider value={chat} key={chat.id}>
              <StormChapterChat key={chat.id} />
            </SpaceChatContext.Provider>
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
