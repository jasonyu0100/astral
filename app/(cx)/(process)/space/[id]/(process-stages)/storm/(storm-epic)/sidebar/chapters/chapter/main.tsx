import { ChapterContext } from '@/(logic)/internal/model/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import { StormChapterTitle } from './header/title/main';
import { useContext } from 'react';
import { ChatContext } from '@/(logic)/internal/model/storm/chat/main';
import {
  glassStyles,
  borderStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';
import { ChatsHandlerContext } from '@/(logic)/internal/handler/storm/chats/main';
import { GlassWindowContents } from '@/(components)/(basic)/glass/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(basic)/glass/window/main';
import { GlassWindowPane } from '@/(components)/(basic)/glass/window/pane/main';

export function StormChapter() {
  const chapter = useContext(ChapterContext);
  const chatsHandler = useContext(ChatsHandlerContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chats = chatsHandler.chats;
  const active = chapter.id === chaptersHandler.chapterId;

  return (
    <>
      {active ? (
        <GlassWindowFrame
          name={StormChapter.name}
          className='relative my-2'
          border={borderStyles['border-all']}
          rounded={roundedStyles['rounded-sm']}
        >
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem] px-[1rem] py-[1rem]'>
            <StormChapterHeader>
              <StormChapterTitle>
                {chapter.title} {`(${chats.length})`}
              </StormChapterTitle>
            </StormChapterHeader>
            <div className='flex w-full flex-col space-y-[1rem]'>
              {chats.map((chat) => (
                <ChatContext.Provider value={chat} key={chat.id}>
                  <StormChapterChat key={chat.id} />
                </ChatContext.Provider>
              ))}
              <StormChapterChatAdd />
            </div>
          </GlassWindowContents>
          <GlassWindowPane glass={glassStyles['glass-5']} />
        </GlassWindowFrame>
      ) : (
        <div className='my-[1rem] flex flex-col space-y-[1rem]'>
          <StormChapterHeader>
            <StormChapterTitle>{chapter.title}</StormChapterTitle>
          </StormChapterHeader>
        </div>
      )}
    </>
  );
}
