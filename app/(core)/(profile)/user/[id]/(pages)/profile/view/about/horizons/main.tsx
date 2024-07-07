import { exampleFileElem } from '@/(server)/(model)/elements/file/main';

export function ProfileAboutHorizons() {
  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      <p className='font-bold text-slate-700'>Horizons</p>
      <div className='flex flex-row items-center space-x-[0.5rem]'>
        <img
          src={exampleFileElem.src}
          className='h-[2rem] w-[2rem] rounded border-[1px] border-slate-300 border-opacity-30'
        ></img>
        <img
          src={exampleFileElem.src}
          className='h-[2rem] w-[2rem] rounded border-[1px] border-slate-300 border-opacity-30'
        ></img>
        <img
          src={exampleFileElem.src}
          className='h-[2rem] w-[2rem] rounded border-[1px] border-slate-300 border-opacity-30'
        ></img>
      </div>
    </div>
  );
}
