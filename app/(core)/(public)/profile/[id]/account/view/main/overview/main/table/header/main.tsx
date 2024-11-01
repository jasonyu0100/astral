import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function UserProfileSpaceTableHeader() {
  return (
    <div className='w-full'>
      <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
        <div className='grid w-full grid-cols-7 items-center py-[1rem]'>
          <div>
            <p className='text-center font-bold text-slate-500'>#</p>
          </div>
          <div className='col-span-2'>
            <p className='font-bold text-slate-500'>Space</p>
          </div>
          <div>
            <p className='font-bold text-slate-500'></p>
          </div>
          <div className=''>
            <p className='text-center font-bold text-slate-500'></p>
          </div>
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
