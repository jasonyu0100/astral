import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function HomeSharedTableHeader() {
  return (
    <div className='w-full px-[3rem] pt-[3rem]'>
      <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
        <div className='grid w-full grid-cols-7 items-center py-[1rem]'>
          <div>
            <p className='text-center text-sm font-bold text-slate-400'>#</p>
          </div>
          <div className='col-span-2'>
            <p className='text-sm font-bold text-slate-400'>Space</p>
          </div>
          <div></div>
          <div></div>
          <div className='col-span-2 grid grid-cols-4'>
            <p className='text-center text-lg font-bold text-slate-300'>🗓️</p>
            <p className='text-center text-lg font-bold text-slate-300'>💡</p>
            <p className='text-center text-lg font-bold text-slate-300'>🟨</p>
            <p className='text-center text-lg font-bold text-slate-300'>🎤</p>
          </div>
        </div>
      </GlassWindowFrame>
    </div>
  );
}
