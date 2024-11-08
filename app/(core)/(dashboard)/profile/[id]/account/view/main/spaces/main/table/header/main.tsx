import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function ProfileSpaceTableHeader() {
  return (
    <div className='w-full'>
      <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
        <div className='grid w-full grid-cols-7 items-center p-[1rem]'>
          <div>
            <p className='text-center font-bold text-slate-500'>#</p>
          </div>
          <div className='col-span-2'>
            <p className='font-bold text-slate-500'>Space</p>
          </div>
          <div>
            <p className='font-bold text-slate-500'></p>
          </div>
          <div></div>
          <div className='col-span-2 grid grid-cols-4'></div>
        </div>
      </GlassWindowFrame>
    </div>
  );
}
