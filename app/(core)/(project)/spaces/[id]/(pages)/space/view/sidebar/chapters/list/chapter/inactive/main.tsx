import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesSpaceInactiveMain() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chaptersListController = useContext(ContextForSpaceChapterList);

  return (
    <GlassWindowFrame
      borderFx={borderFx['border-b']}
      className='overflow-hidden p-[0.5rem]'
    >
      <GlassWindowContents
        className='w-full cursor-pointer'
        onClick={() =>
          chaptersListController.actions.stateActions.select(chapter)
        }
      >
        <p
          className={cn(
            'whitespace-nowrap font-extraBold text-xl text-slate-400',
          )}
        >
          {chapter.title}
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
