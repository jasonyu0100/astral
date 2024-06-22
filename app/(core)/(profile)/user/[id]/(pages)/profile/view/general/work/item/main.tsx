import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { UserProfileRowNumber } from './number/main';

export function ProfileUserWorkItem() {
  return (
    <div className='flex w-full flex-row items-center py-[1rem]'>
      <div className='flex w-[5rem] flex-shrink-0'>
        <UserProfileRowNumber />
      </div>
      <div className='grid flex-grow grid-cols-6 items-center'>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <img
            src={exampleFileElem.src}
            className='h-[3rem] w-[3rem] rounded'
          ></img>
          <div className='flex flex-col'>
            <p className='text-lg font-bold text-slate-300'>Hello world</p>
            <p className='text-md text-slate-300'>Hello world</p>
          </div>
        </div>
        <div />
        <div className='flex'>
          <p className='text-lg font-bold text-slate-300'>16 / 8 / 6 / 1</p>
        </div>
        <div className='flex'>
          <p className='text-lg font-bold text-slate-300'>1,123 views</p>
        </div>
        <div></div>

        <div>
          <p className='text-lg font-bold text-slate-300'>
            {new Date().toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
