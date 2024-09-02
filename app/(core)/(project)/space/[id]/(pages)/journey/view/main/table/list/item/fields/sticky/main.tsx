import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceJourneyLogTableItemSticky() {
  const log = useContext(ContextForChapterLogObj);

  return (
    <div className='col-span-2 flex w-full flex-col justify-between space-y-[0.5rem] bg-yellow-500 p-[2rem]'>
      <div className='flex min-h-[100px] flex-col space-y-[0.5rem]'>
        <p className='w-full text-xl font-bold'>{log.title || 'Untitled'}</p>
        <p className='font-md w-full text-lg'>
          {log.description || 'No description'}
        </p>
      </div>
      <p className='w-full text-sm font-light'>
        {getFormattedAMPM(new Date(log.created))},{' '}
        {getFormattedDate(new Date(log.created))}
      </p>
    </div>
  );
}
