import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';

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
