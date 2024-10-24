import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function NetworkCreativeTableHeader() {
  return (
    <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
      <div className='grid w-full grid-cols-7 items-center py-[1rem]'>
        <p className='text-center font-bold text-slate-300'>#</p>
        <p className='px-[0.5rem] font-bold text-slate-300'>about</p>
        <p className='text-center font-bold text-slate-300'></p>
        <p className='font-bold text-slate-300'></p>
        <p className='text-center font-bold text-slate-300'></p>
        <p className='text-center font-bold text-slate-300'></p>
      </div>
    </GlassWindowFrame>
  );
}
