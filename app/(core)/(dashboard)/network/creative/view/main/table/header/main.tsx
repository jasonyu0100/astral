import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function NetworkCreativeTableHeader() {
  return (
    <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
      <div className='grid w-full grid-cols-8 items-center py-[1rem]'>
        <p className='text-center font-bold text-slate-300'>#</p>
        <div className='col-span-2'>
          <p className='px-[0.5rem] font-bold text-slate-300'>about</p>
        </div>
        <p className='font-bold text-slate-300'>role</p>
        <p className='text-center font-bold text-slate-300'></p>
        <p className='font-bold text-slate-300'>spaces</p>
        <p className='text-center font-bold text-slate-300'></p>
        <p className='text-center font-bold text-slate-300'></p>
      </div>
    </GlassWindowFrame>
  );
}
