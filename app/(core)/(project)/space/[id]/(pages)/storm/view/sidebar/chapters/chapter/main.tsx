import { SpaceChapterContext } from '@/(model)/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import { useContext } from 'react';
import { ChapterChatContext } from '@/(model)/space/chapter/chat/main';
import { ChaptersHandlerContext } from '@/(controller)/(archive)/chapters/main';
import { ChatsHandlerContext } from '@/(controller)/(archive)/storm/chats/main';
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
            <ChapterChatContext.Provider value={chat} key={chat.id}>
              <StormChapterChat key={chat.id} />
            </ChapterChatContext.Provider>
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
