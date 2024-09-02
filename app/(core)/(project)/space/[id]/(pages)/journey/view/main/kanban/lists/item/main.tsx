import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceProgressListItem() {
  const log = useContext(ContextForChapterLogObj);
  return (
    <GlassWindowFrame className='w-full'>
      <GlassWindowContents
        className={cn(
          'flex aspect-square flex-col space-y-[1rem] bg-yellow-500 p-[1rem]',
        )}
      >
        <p className='text-xl font-bold'>{log.title}</p>
        <p className='font-md'>{log.description}</p>
        <p className='font-light'>
          {getFormattedAMPM(new Date(log.created))},
          {getFormattedDate(new Date(log.created))}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
