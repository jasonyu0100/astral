import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function SpacesBoardTableHeader() {
  return (
    <GlassWindowFrame
      borderFx={borderFx['border-b']}
      className='w-full py-[1rem]'
    >
      <GlassWindowContents className='grid w-full grid-cols-7 items-center justify-items-center'>
        <p className='font-bold text-slate-300'>#</p>
        <p className='font-bold text-slate-300'>Log</p>
        <p className='font-bold text-slate-300'></p>
        <p className='font-bold text-slate-300'></p>
        <p className='font-bold text-slate-300'>Status</p>
        <p className='font-bold text-slate-300'>Links</p>
        <p className='font-bold text-slate-300'>Authors</p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
