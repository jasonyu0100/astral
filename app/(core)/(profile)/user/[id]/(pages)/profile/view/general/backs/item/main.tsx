import { exampleFileElem } from '@/(server)/(model)/elements/file/main';

export function UserProfileBacksItem() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <img
        src={exampleFileElem.src}
        className='h-[10rem] w-[10rem] rounded-full'
      ></img>
      <div className='flex flex-col px-[0.5rem]'>
        <p className='text-md font-bold text-slate-700'>Hello world</p>
        <p className='text-sm font-light text-slate-700'>Hello world</p>
      </div>
    </div>
  );
}
