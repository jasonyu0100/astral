import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForChapterSessionList } from '@/(server)/(controller)/space/chapter/session/list';
import { ContextForChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForSpaceSessionsController } from '../../../../(controller)/space-session/main';

export function SpaceSessionsSidebarEntrySession() {
  const session = useContext(ContextForChapterSessionObj);
  const spaceSessionController = useContext(ContextForSpaceSessionsController);
  const sessionListController = useContext(ContextForChapterSessionList);

  return (
    <GlassWindowFrame
      name={SpaceSessionsSidebarEntrySession.name}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='flex- flex cursor-pointer p-[1rem]'
    >
      <GlassWindowContents
        className='flex cursor-pointer flex-col'
        onClick={() => {
          if (spaceSessionController.historyView) {
            spaceSessionController.updateHistoryView(false);
          } else {
            spaceSessionController.updateHistoryView(true);
          }
          spaceSessionController.updateSessionView(true);
          sessionListController.actions.stateActions.select(session);
        }}
      >
        <p className='text-xl font-bold text-slate-300'>{session.title}</p>
        <p className='font-bold text-slate-500'>
          {new Date(session.created).toLocaleDateString()}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
