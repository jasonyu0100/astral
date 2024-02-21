import { DivInputProps } from '@/(common)/types/main';
import { GalleryContext } from '@/(ouros)/(model)/gallery/main';
import { useGlobalUser } from '@/(store)/user/main';
import { vaultMap } from '@/(verses)/(voyager)/vault/map';
import Link from 'next/link';
import { useContext } from 'react';

export function GalleryBack({ ...props }: DivInputProps) {
  const user = useGlobalUser((state) => state.user);
  const gallery = useContext(GalleryContext);

  return (
    <div className='flex w-full flex-grow flex-col p-[1rem]' {...props}>
      <Link href={vaultMap.vault.explorer.collections.id.link(gallery.id)}>
        <div className='animate-pulse font-extraBold text-xl text-slate-300'>
          {gallery.title}
        </div>
      </Link>
      <div className='text-md mt-[1rem] font-normal text-slate-500'>
        {user.fname} {user.lname}
      </div>
      <div className='text-md mt-[1rem] font-normal text-slate-500'>
        {gallery.description}
      </div>
      <button className='mt-auto flex w-full items-center justify-center bg-black p-[1rem] font-bold text-white' onClick={(e) => {
        e.stopPropagation()
        alert('adsdas')
      }}>
        Change
      </button>
    </div>
  );
}
