import { borderFx, glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function UserProfileAdmin() {
  return (
    <GlassWindowFrame className='h-[3rem]' borderFx={borderFx['border-t']}>
      <GlassWindowContents className='flex items-center justify-center'>
        <p className='text-sm font-bold text-slate-300'>admin mode</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
