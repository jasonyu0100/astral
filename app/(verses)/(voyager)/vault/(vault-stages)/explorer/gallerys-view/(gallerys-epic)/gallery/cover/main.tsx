import { DivInputProps } from '@/(common)/types/main';
import { GalleryContext } from '@/(ouros)/(model)/gallery/main';
import { useGlobalUser } from '@/(store)/user/main';
import { vaultMap } from '@/(verses)/(voyager)/vault/map';
import Link from 'next/link';
import { useContext } from 'react';

export function GalleryCover({ ...props }: DivInputProps) {
  const gallery = useContext(GalleryContext);
  const user = useGlobalUser((state) => state.user);

  return (
    <div {...props}>
      <img
        className='aspect-square w-full animate-pulse-slow cursor-pointer bg-black object-cover'
        src={gallery.thumbnail.src}
      />
      <div className='flex w-full flex-grow flex-col p-[1rem]'>
        <Link href={vaultMap.vault.explorer.collections.id.link(gallery.id)}>
          <div className='animate-pulse font-extraBold text-xl text-slate-300'>
            {gallery.title}
          </div>
        </Link>
        <div className='text-md fon- {user.fname} {user.lname}t-normal mt-[1rem] text-slate-500'>
          {user.fname} {user.lname}
        </div>
      </div>
    </div>
  );
}
