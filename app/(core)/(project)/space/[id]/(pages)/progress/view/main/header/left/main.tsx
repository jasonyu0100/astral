import { useControllerForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceProgressHeaderLeft() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <div className='flex w-1/3 flex-row'>
      <p className='text-md font-light text-slate-700'>
        {getFormattedDate(new Date())}
      </p>
    </div>
  );
}
