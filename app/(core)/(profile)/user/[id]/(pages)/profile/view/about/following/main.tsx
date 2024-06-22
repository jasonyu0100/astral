import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../../main';

export function ProfileAboutFollowing() {
  const controllerForProfilePage = useContext(ContextForProfilePage);

  return (
    <div className='flex w-full flex-row items-center justify-center space-x-[1rem]'>
      <p
        className='cursor-pointer font-bold text-white'
        onClick={() => {
          controllerForProfilePage.setPage(ProfilePage.Backers);
        }}
      >
        100 Backers
      </p>
      <div className='h-[0.5rem] w-[0.5rem] rounded-full bg-slate-500' />
      <p
        className='cursor-pointer font-bold text-white'
        onClick={() => {
          controllerForProfilePage.setPage(ProfilePage.Connections);
        }}
      >
        100 Connections
      </p>
    </div>
  );
}
