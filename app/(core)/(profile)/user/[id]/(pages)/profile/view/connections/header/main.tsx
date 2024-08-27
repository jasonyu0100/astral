import { ContextForUserConnectionList } from '@/(server)/controller/user/connection/list';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../../../page';
import { ContextForConnections } from '../main';

export function UserProfileConnectionsHeader() {
  const connectionsController = useContext(ContextForConnections);
  const profilePage = useContext(ContextForProfilePage);
  const userConectionList = useContext(ContextForUserConnectionList);

  return (
    <GlassWindowFrame className='flex py-[1rem]'>
      <GlassWindowContents className='flex h-full w-full flex-row items-center justify-center'>
        <div className='flex w-full flex-row px-[2rem]'>
          <div className='flex w-1/3 flex-row'>
            <p
              className='text-md cursor-pointer font-light text-slate-300'
              onClick={() => {
                profilePage.setPage(ProfilePage.General);
              }}
            >
              Back
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-center'>
            <p className='text-md font-light text-slate-300'>
              {connectionsController.view}
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-end'>
            <p className='text-md font-light text-slate-300'>
              {userConectionList.state.objs.length} / 100
            </p>
          </div>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
