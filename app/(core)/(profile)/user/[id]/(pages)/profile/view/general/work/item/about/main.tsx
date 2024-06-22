import { exampleFileElem } from '@/(server)/(model)/elements/file/main';

export function UserProfileGeneralWorkItemAbout() {
  return (
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
  );
}
