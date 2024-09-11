import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function UserProfileAdminIndicator() {
  return (
    <GlassWindowFrame className='h-[4rem]'>
      <GlassWindowContents className='flex items-center justify-center'>
        <p className='text-lg font-bold text-slate-500'>Admin mode</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
