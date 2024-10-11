import { ContextForTaskObj } from '@/(server)/model/task/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function HorizonsFieldListItem() {
  const task = useContext(ContextForTaskObj);

  return (
    <GlassWindowFrame className='w-full p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents
        className={cn(
          'flex h-full w-full cursor-pointer flex-col space-y-[1rem] overflow-auto',
        )}
        onClick={() => {}}
      >
        <p className='text-lg font-bold text-slate-300'>{task.title}</p>
        <p className='font-md text-slate-300'>{task.description}</p>
        <p className='text-md mt-auto font-light text-slate-300'>
          {getFormattedAMPM(new Date(task.created))},
          {getFormattedDate(new Date(task.created))}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
