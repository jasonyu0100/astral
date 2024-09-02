import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import {
  ChapterLogStatus,
  ContextForChapterLogObj,
} from '@/(server)/model/space/chapter/log/main';
import { useContext } from 'react';

export function SpaceJourneyLogTableItemStatus() {
  const log = useContext(ContextForChapterLogObj);
  const logListController = useContext(ContextForChapterLogList);

  return (
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
  );
}
