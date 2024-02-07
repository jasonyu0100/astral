import { ChapterObj } from '@/tables/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import StormChapterIndicator from './header/indicator/main';
import { StormChapterTitle } from './header/title/main';
import { useContext } from 'react';
import { StormContext } from '../../../page';

export function StormChapter({ chapter }: { chapter: ChapterObj }) {
  const { chats, chapterId } = useContext(StormContext);
  const active = chapter.id === chapterId;

  return (
    <div className='flex flex-col py-[1rem] mr-[1rem] space-y-[1rem]'>
      {active ? (
        <>
          <StormChapterHeader chapter={chapter}>
            <StormChapterTitle>
              {chapter.title} {`(${chats.length})`}
            </StormChapterTitle>
            <StormChapterIndicator />
          </StormChapterHeader>
          <div className="flex flex-col w-full space-y-[1rem]">
            {chats.map((chat) => (
              <StormChapterChat chat={chat} />
            ))}
            <StormChapterChatAdd />
          </div>
        </>
      ) : (
        <>
          <StormChapterHeader chapter={chapter}>
            <StormChapterTitle>{chapter.title}</StormChapterTitle>
          </StormChapterHeader>
        </>
      )}
    </div>
  );
}
