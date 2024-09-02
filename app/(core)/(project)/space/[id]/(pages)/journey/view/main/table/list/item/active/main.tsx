import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForSpaceJourney } from '../../../../../../controller/main';

export function SpaceJourneyLogTableItemActive() {
  const index = useContext(ContextForIndexable);
  const log = useContext(ContextForChapterLogObj);
  const logListController = useContext(ContextForChapterLogList);
  const journeyController = useContext(ContextForSpaceJourney);
  const selected = journeyController.checkContainsSelectedLog(log);

  return (
    <GlassWindowFrame className='w-full py-[2rem]'>
      <GlassWindowContents
        className='grid w-full grid-cols-7 items-center justify-items-center'
        onClick={() => {
          logListController.actions.stateActions.select(log);
        }}
      >
        <div>
          <GlassWindowFrame
            className='h-[3rem] w-[3rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents
              className={cn('flex items-center justify-center', {
                'bg-blue-500': selected,
              })}
              onClick={() => {
                if (selected) {
                  journeyController.updateSelectedLogs(
                    journeyController.selectedLogs.filter((selectedLog) => {
                      return selectedLog.id !== log.id;
                    }),
                  );
                } else {
                  journeyController.updateSelectedLogs([
                    ...journeyController.selectedLogs,
                    log,
                  ]);
                }
              }}
            >
              <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <div className='col-span-2 flex w-full flex-col justify-between space-y-[0.5rem] bg-yellow-500 p-[2rem]'>
          <div className='flex min-h-[100px] flex-col space-y-[0.5rem]'>
            <p className='w-full text-xl font-bold'>
              {log.title || 'Untitled'}
            </p>
            <p className='font-md w-full text-lg'>
              {log.description || 'No description'}
            </p>
          </div>
          <p className='w-full text-sm font-light'>
            {getFormattedAMPM(new Date(log.created))},{' '}
            {getFormattedDate(new Date(log.created))}
          </p>
        </div>
        <div></div>
        <div>
          <p className='text-light text-sm font-bold text-slate-300'>
            {log.logStatus}
          </p>
        </div>
        <div>
          <p className='text-light text-sm font-bold text-slate-300'>16</p>
        </div>
        <div className='flex flex-row space-x-[-1.5rem]'>
          {exampleFileElems.slice(0, 2).map((fileElem) => (
            <img
              src={fileElem.src}
              alt='example'
              className='aspect-square h-[3rem] w-[3rem] rounded-full'
            />
          ))}
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
