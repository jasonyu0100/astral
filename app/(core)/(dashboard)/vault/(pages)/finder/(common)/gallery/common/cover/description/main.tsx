import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext } from 'react';

export function ContainerDescription() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const gallery = useContext(ContextForGalleryObj);

  return (
    <div className='flex w-full flex-grow flex-col p-[1rem]'>
      <div className='animate-pulse font-extraBold text-xl text-slate-300'>
        {gallery.title?.trim() || 'Untitled'}
      </div>
      <div className='text-md mt-[1rem] font-normal text-slate-500'>
        {loggedInUser?.fname} {loggedInUser?.lname}
      </div>
    </div>
  );
}
