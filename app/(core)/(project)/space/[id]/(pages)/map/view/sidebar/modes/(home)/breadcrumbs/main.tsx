import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export function SpaceMapGallerysBreadcrumbs() {
  return (
    <GlassWindowFrame className='h-[3rem] w-full flex-shrink-0'>
      <GlassWindowContents className='flex h-full w-full items-center px-[1rem]'>
        <p className='cursor-pointer text-sm font-bold text-slate-700'>
          Gallerys
        </p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
