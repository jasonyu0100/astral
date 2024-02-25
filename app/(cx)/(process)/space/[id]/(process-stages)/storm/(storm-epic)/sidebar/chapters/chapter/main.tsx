import {
  ChapterContext,
  ChapterObj,
} from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import StormChapterIndicator from './header/indicator/main';
import { StormChapterTitle } from './header/title/main';
import { createContext, useContext } from 'react';
import { StormContext } from '../../../../page';
import { ChatObj } from '@/(logic)/internal/data/infra/model/storm/chat/main';
import { cn } from '@/(logic)/utils/cn';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { GlassPane } from '@/(components)/(basic)/glass/pane/main';
import { GlassFrame } from '@/(components)/(basic)/glass/frame/main';

export const StormChatContext = createContext({} as ChatObj);

export function StormChapter() {
  const chapter = useContext(ChapterContext);
  const { chats, chapterId } = useContext(StormContext);
  const active = chapter.id === chapterId;

  return (
    <>
      {active ? (
        <GlassFrame className='relative rounded-lg my-[1rem]' borderStyle={borderStyles['border-all']}>
          <GlassPane glassStyle={backgroundStyles['glass-5']}/>
          <div className="flex flex-col w-full space-y-[1rem] px-[1rem] py-[1rem] z-50">
            <StormChapterHeader>
              <StormChapterTitle>
                {chapter.title} {`(${chats.length})`}
              </StormChapterTitle>
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
          </div>
        </GlassFrame>
      ) : (
        <div className='flex flex-col space-y-[1rem] my-[1rem]'>
          <StormChapterHeader>
            <StormChapterTitle>{chapter.title}</StormChapterTitle>
          </StormChapterHeader>
        </div>
      )}
    </>
  );
}
