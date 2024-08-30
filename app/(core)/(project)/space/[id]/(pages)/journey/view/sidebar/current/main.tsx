import { ContextForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourneyController,
  SpaceJourneyPage,
} from '../../../controller/space-session/main';

export function SpaceJourneySidebarCurrentSession() {
  const spaceSessionController = useContext(ContextForSpaceJourneyController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <>
      <GlassWindowFrame
        name={SpaceJourneySidebarCurrentSession.name}
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
        className='flex- flex cursor-pointer p-[1rem]'
      >
        <GlassWindowContents
          className='flex cursor-pointer flex-col space-y-[0.5rem]'
          onClick={() =>
            spaceSessionController.setPage(SpaceJourneyPage.COMPLETE_SESSION)
          }
        >
          <p className='text-xs font-light text-slate-500'>
            {new Date().toDateString()}
          </p>
          <p className='text-lg font-bold text-slate-300'>Current Session</p>
          <p className='text-sm font-bold text-slate-500'>
            {updateListController.state.objs.length} updates
          </p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </>
  );
}
