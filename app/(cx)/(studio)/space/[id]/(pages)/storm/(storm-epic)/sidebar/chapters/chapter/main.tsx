import { ChapterContext } from '@/(types)/model/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import { useContext } from 'react';
import { ChatContext } from '@/(types)/model/storm/chat/main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';
import { ChatsHandlerContext } from '@/(lgx)/internal/handler/storm/chats/main';
import { ActiveChapterHeaderContainer } from './header/container/active/main';
import { InactiveChapterHeaderContainer } from './header/container/inactive/main';

export function StormChapter() {
  const chapter = useContext(ChapterContext);
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
            <ChatContext.Provider value={chat} key={chat.id}>
              <StormChapterChat key={chat.id} />
            </ChatContext.Provider>
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
