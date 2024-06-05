import { ArchiveGalleryContext } from '@/(model)/archive/gallery/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { useContext } from 'react';

export function ContainerDescription() {
  const user = useGlobalUser((state) => state.user);
  const gallery = useContext(ArchiveGalleryContext);
  
  return (
    <div className='flex w-full flex-grow flex-col p-[1rem]'>
      <div className='animate-pulse font-extraBold text-xl text-slate-300'>
        {gallery.title}
      </div>
      <div className='text-md fon- {user.fname} {user.lname}t-normal mt-[1rem] text-slate-500'>
        {user.fname} {user.lname}
      </div>
    </div>
  );
}
