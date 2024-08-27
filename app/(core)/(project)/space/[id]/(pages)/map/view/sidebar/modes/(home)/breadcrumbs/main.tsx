import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function SpaceMapGallerysBreadcrumbs() {
  return (
    <GlassWindowFrame className=' w-full flex-shrink-0 pb-[0.5rem]'>
      <GlassWindowContents className='flex h-full w-full items-center'>
        <p className='cursor-pointer text-sm font-bold text-slate-500'>Home</p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
