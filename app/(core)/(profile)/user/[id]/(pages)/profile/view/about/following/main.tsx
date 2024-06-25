import { ContextForUserBackerList } from '@/(server)/(controller)/user/backer/list';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../../../page';

export function ProfileAboutFollowing() {
  const controllerForProfilePage = useContext(ContextForProfilePage);
  const connectionListController = useContext(ContextForUserConnectionList);
  const backerListController = useContext(ContextForUserBackerList);

  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
      <p
        className='cursor-pointer text-sm font-bold text-white'
        onClick={() => {
          controllerForProfilePage.setPage(ProfilePage.Connections);
        }}
      >
        {connectionListController.state.objs.length} Connections
      </p>
      <div className='h-[0.5rem] w-[0.5rem] rounded-full bg-slate-500' />
      <p
        className='cursor-pointer text-sm font-bold text-white'
        onClick={() => {
          controllerForProfilePage.setPage(ProfilePage.Backers);
        }}
      >
        {backerListController.state.objs.length} Backers
      </p>
    </div>
  );
}
