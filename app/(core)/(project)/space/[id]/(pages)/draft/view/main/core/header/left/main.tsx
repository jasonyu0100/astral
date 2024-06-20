import { getFormattedDate } from '@/(utils)/dateFormat';

export function SpaceDraftHeaderLeft() {
  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <p className='text-md font-light text-slate-300'>
          {getFormattedDate(new Date())}
        </p>
      </div>
    </>
  );
}
