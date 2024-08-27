import { getFormattedDate } from '@/utils/dateFormat';

export function SpaceProgressHeaderLeft() {
  return (
    <div className='flex w-1/3 flex-row'>
      <p className='text-md font-light text-slate-300'>
        {getFormattedDate(new Date())}
      </p>
    </div>
  );
}
