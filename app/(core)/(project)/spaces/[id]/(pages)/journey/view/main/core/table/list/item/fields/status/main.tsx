import { ContextForChapterWayList } from '@/(server)/controller/space/chapter/way/list';
import {
  ChapterWayStatus,
  ContextForChapterWayObj,
} from '@/(server)/model/space/chapter/way/main';
import { useContext } from 'react';

export function SpacesJourneyLogTableItemStatus() {
  const log = useContext(ContextForChapterWayObj);
  const wayListController = useContext(ContextForChapterWayList);

  return (
    <div>
      <select
        className='text-light bg-transparent text-sm font-bold text-slate-300 outline-none'
        value={log.wayStatus}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={(e) => {
          wayListController.actions.editActions.edit(log.id, {
            wayStatus: e.target.value,
          });
        }}
      >
        <option>{ChapterWayStatus.TODO}</option>
        <option>{ChapterWayStatus.IN_PROGRESS}</option>
        <option>{ChapterWayStatus.REVIEW}</option>
        <option>{ChapterWayStatus.DONE}</option>
      </select>
    </div>
  );
}
