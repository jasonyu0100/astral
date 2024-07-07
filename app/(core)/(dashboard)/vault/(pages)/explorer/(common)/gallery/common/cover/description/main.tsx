import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';

export function ContainerDescription() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const gallery = useContext(ContextForGalleryObj);

  return (
    <div className='flex w-full flex-grow flex-col p-[1rem]'>
      <div className='animate-pulse font-extraBold text-xl text-slate-700'>
        {gallery.title}
      </div>
      <div className='text-md mt-[1rem] font-normal text-slate-700'>
        {loggedInUser?.fname} {loggedInUser?.lname}
      </div>
    </div>
  );
}
