import { useControllerForSessionUpdateList } from '@/(server)/controller/space/chapter/session/update/list';
import { ContextForChapterSessionObj } from '@/(server)/model/space/chapter/session/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourneyController,
  SpaceJourneyPage,
} from '../../../controller/space-session/main';

export function SpaceJourneySidebarSession() {
  const index = useContext(ContextForIndexable);
  const session = useContext(ContextForChapterSessionObj);
  const spaceSessionController = useContext(ContextForSpaceJourneyController);
  const updateListController = useControllerForSessionUpdateList(session.id);

  return (
    <>
      <GlassWindowFrame
        name={SpaceJourneySidebarSession.name}
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
        className='flex- flex cursor-pointer p-[1rem]'
      >
        <GlassWindowContents
          className='flex cursor-pointer flex-col space-y-[0.5rem]'
          onClick={() =>
            spaceSessionController.setPage(SpaceJourneyPage.VIEW_SESSION)
          }
        >
          <p className='text-xs font-light text-slate-500'>
            {new Date().toDateString()}
          </p>
          <p className='text-lg font-bold text-slate-300'>
            Session {index + 1} - {session.title}
          </p>
          <p className='text-md text-slate-300'>{session.description}</p>
          <p className='text-sm font-bold text-slate-500'>
            {updateListController.state.objs.length} updates
          </p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </>
  );
}
