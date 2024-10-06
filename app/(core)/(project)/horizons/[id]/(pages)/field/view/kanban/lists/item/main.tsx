import { ContextForChapterWayObj } from '@/(server)/model/space/chapter/way/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function HorizonsFieldListItem() {
  const log = useContext(ContextForChapterWayObj);

  return (
    <GlassWindowFrame className='w-full p-[1rem]' roundedFx={roundedFx.rounded}>
      <GlassWindowContents
        className={ctwn(
          'flex h-full w-full cursor-pointer flex-col space-y-[1rem] overflow-auto',
        )}
        onClick={() => {}}
      >
        <p className='text-lg font-bold text-slate-300'>{log.title}</p>
        <p className='font-md text-slate-300'>{log.description}</p>
        <p className='text-md mt-auto font-light text-slate-300'>
          {getFormattedAMPM(new Date(log.created))},
          {getFormattedDate(new Date(log.created))}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
