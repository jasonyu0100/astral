import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { ContextForSpaceSessionController } from '../../../../(controller)/space-session/main';

export function SpaceSessionSidebarEntryUpdate() {
  const update = useContext(ContextForChapterSessionUpdateObj);
  const spaceSessionController = useContext(ContextForSpaceSessionController);
  const updateListController = useContext(ContextForSessionUpdateOfChapterList);

  return (
    <GlassWindowFrame
      name={SpaceSessionSidebarEntryUpdate.name}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
      className='flex- flex p-[1rem]'
    >
      <GlassWindowContents
        className='flex cursor-pointer flex-col'
        onClick={() => {
          if (spaceSessionController.historyView) {
            spaceSessionController.updateHistoryView(false);
          } else {
            spaceSessionController.updateHistoryView(true);
          }
          spaceSessionController.updateSessionView(false);
          updateListController.actions.stateActions.select(update);
        }}
      >
        <p className='text-xl font-bold text-slate-300'>
          {update.variant.toLowerCase()} update
        </p>
        <p className='font-bold text-slate-500'>
          {getFormattedAMPM(new Date(update.created))}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
