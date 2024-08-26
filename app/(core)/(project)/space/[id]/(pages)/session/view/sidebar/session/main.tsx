import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { useControllerForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import { ContextForChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import {
  ContextForSpaceSessionController,
  SpaceSessionPage,
} from '../../../controller/space-session/main';

export function SpaceSessionSidebarSession() {
  const index = useContext(ContextForIndexable);
  const session = useContext(ContextForChapterSessionObj);
  const spaceSessionController = useContext(ContextForSpaceSessionController);
  const updateListController = useControllerForSessionUpdateList(session.id);

  return (
    <>
      <GlassWindowFrame
        name={SpaceSessionSidebarSession.name}
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
        className='flex- flex cursor-pointer p-[1rem]'
      >
        <GlassWindowContents
          className='flex cursor-pointer flex-col space-y-[0.5rem]'
          onClick={() =>
            spaceSessionController.setPage(SpaceSessionPage.VIEW_SESSION)
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
