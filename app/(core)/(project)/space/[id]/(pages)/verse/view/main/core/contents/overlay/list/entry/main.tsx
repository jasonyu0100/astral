import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';

export function VerseListEntry({ index }: { index: number }) {
  const verseListController = useContext(ContextForChapterVerseList);
  const part = useContext(ContextForChapterVerseObj);
  const active = part.id == verseListController.state.objId;

  return (
    <div
      onClick={() =>
        verseListController.actions.editActions.edit(part.id, part)
      }
      className='flex w-full cursor-pointer'
    >
      <p
        className={cn(`text-md font-bold`, {
          'text-slate-400': active,
          'text-slate-500': !active,
        })}
      >
        {index + 1}. {part.title}
      </p>
    </div>
  );
}
