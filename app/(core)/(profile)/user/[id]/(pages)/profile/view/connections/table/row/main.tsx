import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { UserProfileConnectionsRowNumber } from './number/main';

export function UserProfileFollowersTableRow() {
  return (
    <div className='grid w-full grid-cols-6 items-center border-slate-300 border-opacity-30 py-[2rem]'>
      <UserProfileConnectionsRowNumber />
      <div className='flex flex-row items-center space-x-[2rem]'>
        <img
          src={exampleFileElem.src}
          className='h-[3rem] w-[3rem] rounded-full object-cover'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-lg font-bold text-white'>Jason Yu</p>
          <p className='font-light text-white'>jasonyu0100@gmail.com</p>
        </div>
      </div>
      <div></div>
      <div className='flex'>
        <p className='text-lg font-bold text-white'>producer</p>
      </div>
      <div className='flex justify-center'>
        <p className='text-center text-white'>Follow</p>
      </div>
      <div className='flex justify-center'>
        <p className='text-center text-white'>Send Invite</p>
      </div>
    </div>
  );
}
