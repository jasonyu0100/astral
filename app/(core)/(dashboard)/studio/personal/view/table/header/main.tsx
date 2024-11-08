import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function StudioPersonalTableHeader() {
  return (
    <div className='w-full px-[3rem]'>
      <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
        <div className='grid w-full grid-cols-8 items-center py-[1rem]'>
          <div>
            <p className='text-center text-sm font-bold text-slate-500'>#</p>
          </div>
          <div className='col-span-2'>
            <p className='text-sm font-bold text-slate-500'>Space</p>
          </div>
          <div>
            <p className='text-sm font-bold text-slate-500'></p>
          </div>
          <div></div>
          <div className='col-span-2'></div>
          <div></div>
        </div>
      </GlassWindowFrame>
    </div>
  );
}
