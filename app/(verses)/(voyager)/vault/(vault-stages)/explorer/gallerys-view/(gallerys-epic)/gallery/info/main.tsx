import { GalleryContext } from '@/(ouros)/(model)/gallery/main';
import { useGlobalUser } from '@/(store)/user/main';
import { useContext } from 'react';

export function GalleryInfo() {
  const user = useGlobalUser((state) => state.user);
  const gallery = useContext(GalleryContext);

  return (
    <div className='flex w-full flex-grow flex-col p-[1rem]'>
      <div className='font-extraBold text-xl text-slate-300'>
        {gallery.title} - {user.fname} {user.lname}
      </div>
      <div className='text-md mt-[1rem] font-normal text-slate-500'>
        {gallery.description}
      </div>
    </div>
  );
}
