import { ContextForSpacesJourney } from '@/(core)/(project)/spaces/[id]/(pages)/journey/controller/main';
import { ContextForChapterWayObj } from '@/(server)/model/space/chapter/way/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesJourneyLogTableItemCard() {
  const log = useContext(ContextForChapterWayObj);
  const journeyController = useContext(ContextForSpacesJourney);
  const selected = journeyController.state.selectedLogs.includes(log);

  return (
    <GlassWindowFrame className='col-span-3 aspect-video w-full overflow-auto bg-yellow-500 p-[1rem]'>
      <GlassWindowContents className='h-full w-full cursor-pointer flex-col space-y-[0.5rem] overflow-auto pr-[1rem]'>
        <p className='w-full text-sm font-light '>
          {getFormattedAMPM(new Date(log.created))},{' '}
          {getFormattedDate(new Date(log.created))}
        </p>
        <br />
        <p className='w-full text-xl font-bold '>{log.title || 'Untitled'}</p>
        <p className='font-md w-full text-lg '>
          {log.description || 'No description'}
        </p>
      </GlassWindowContents>
      {selected ? (
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      ) : (
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      )}
    </GlassWindowFrame>
  );
}
