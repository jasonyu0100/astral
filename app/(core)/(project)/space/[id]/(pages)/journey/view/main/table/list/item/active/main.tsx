import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { ContextForUserMain } from '@/(server)/controller/user/main';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import {
  ChapterLogStatus,
  ContextForChapterLogObj,
} from '@/(server)/model/space/chapter/log/main';
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
  const user = useContext(ContextForUserMain);
  const log = useContext(ContextForChapterLogObj);
  const logListController = useContext(ContextForChapterLogList);
  const linkListController = useContext(ContextForLogLinkList);
  const {
    state: { selectedLogs },
    actions: { updateSelectedLogs, checkContainsSelectedLog },
  } = useContext(ContextForSpaceJourney);
  const selected = checkContainsSelectedLog(log);

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
                  updateSelectedLogs(
                    selectedLogs.filter((selectedLog) => {
                      return selectedLog.id !== log.id;
                    }),
                  );
                } else {
                  updateSelectedLogs([...selectedLogs, log]);
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
          <select
            className='text-light bg-transparent text-sm font-bold text-slate-300 outline-none'
            value={log.logStatus}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={(e) => {
              logListController.actions.editActions.edit(log.id, {
                logStatus: e.target.value,
              });
            }}
          >
            <option>{ChapterLogStatus.TODO}</option>
            <option>{ChapterLogStatus.IN_PROGRESS}</option>
            <option>{ChapterLogStatus.REVIEW}</option>
            <option>{ChapterLogStatus.DONE}</option>
          </select>
        </div>
        <div>
          <p className='text-light text-sm font-bold text-slate-300'>
            {linkListController.state.objs.length}
          </p>
        </div>
        <div className='flex flex-row space-x-[-1.5rem]'>
          <img
            src={user.state?.obj?.dp?.src || exampleFileElem.src}
            alt='example'
            className='aspect-square h-[3rem] w-[3rem] rounded-full'
          />
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
