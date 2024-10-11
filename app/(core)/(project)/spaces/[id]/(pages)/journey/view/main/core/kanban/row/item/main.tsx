import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ContextForTaskObj } from '@/(server)/model/task/main';
import { glassFx } from '@/style/glass/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForSpacesJourney } from '../../../../../../controller/main';

export function SpaceJourneyListItem() {
  const journeyController = useContext(ContextForSpacesJourney);
  const wayListController = useContext(ContextForTaskList);
  const log = useContext(ContextForTaskObj);
  const selected = journeyController.state.selectedLogs.includes(log);

  return (
    <GlassWindowFrame className='aspect-video h-full bg-yellow-500 p-[0.5rem]'>
      <GlassWindowContents
        className={cn(
          'flex h-full w-full cursor-pointer flex-col space-y-[0.5rem] overflow-auto',
        )}
        onClick={() => {
          if (journeyController.state.selectedLogs.includes(log)) {
            journeyController.actions.updateSelectedLogs(
              journeyController.state.selectedLogs.filter(
                (selectedLog) => selectedLog !== log,
              ),
            );
          } else {
            wayListController.actions.stateActions.select(log);
            journeyController.actions.updateSelectedLogs([
              ...journeyController.state.selectedLogs,
              log,
            ]);
          }
        }}
      >
        <p className='text-xs font-light '>
          {getFormattedDate(new Date(log.created))}
        </p>
        <p className='text-md font-bold '>{log.title}</p>
        <p className='text-sm '>{log.description}</p>
      </GlassWindowContents>
      {selected && <GlassWindowPane glassFx={glassFx['glass-30']} />}
    </GlassWindowFrame>
  );
}
