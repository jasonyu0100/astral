import { ChapterContext, ChapterObj } from '@/(ouros)/(model)/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import StormChapterIndicator from './header/indicator/main';
import { StormChapterTitle } from './header/title/main';
import { createContext, useContext } from 'react';
import { StormContext } from '../../../../page';
import { ChatObj } from '@/(ouros)/(model)/storm/chat/main';

export const StormChatContext = createContext({} as ChatObj);

export function StormChapter() {
  const chapter = useContext(ChapterContext);
  const { chats, chapterId } = useContext(StormContext);
  const active = chapter.id === chapterId;

  return (
    <div className='mr-[1rem] flex flex-col space-y-[1rem] py-[1rem]'>
      {active ? (
        <>
          <StormChapterHeader>
            <StormChapterTitle>
              {chapter.title} {`(${chats.length})`}
            </StormChapterTitle>
            <StormChapterIndicator />
          </StormChapterHeader>
          <div className='flex w-full flex-col space-y-[1rem]'>
            {chats.map((chat) => (
              // eslint-disable-next-line react/jsx-key
              <StormChatContext.Provider value={chat}>
                <StormChapterChat />
              </StormChatContext.Provider>
            ))}
            <StormChapterChatAdd />
          </div>
        </>
      ) : (
        <>
          <StormChapterHeader>
            <StormChapterTitle>{chapter.title}</StormChapterTitle>
          </StormChapterHeader>
        </>
      )}
    </div>
  );
}
