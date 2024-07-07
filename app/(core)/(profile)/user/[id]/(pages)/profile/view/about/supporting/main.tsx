import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../../../page';

export function ProfileAboutSupporting() {
  const controllerForProfilePage = useContext(ContextForProfilePage);

  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      <div className='flex flex-col'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-700'
          onClick={() => {
            controllerForProfilePage.setPage(ProfilePage.Connections);
          }}
        >
          Collabs
        </p>
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
      <div className='flex flex-col'>
        <p
          className='cursor-pointer text-sm font-bold text-slate-700'
          onClick={() => {
            controllerForProfilePage.setPage(ProfilePage.Backers);
          }}
        >
          Backs
        </p>
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
    </div>
  );
}
