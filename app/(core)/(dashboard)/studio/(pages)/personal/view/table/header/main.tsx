import { borderFx } from '@/style/data';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function StudioSpacesTableHeader() {
  return (
    <div className='w-full px-[3rem]'>
      <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
        <div className='grid w-full grid-cols-7 items-center py-[1rem]'>
          <p className='text-center font-bold text-slate-300'>#</p>
          <p className='px-[0.5rem] font-bold text-slate-300'>Space</p>
          <p className='text-center font-bold text-slate-300'></p>
          <div />
          <div className='col-span-2 grid grid-cols-4'>
            <p className='text-center font-bold text-slate-300'>Day</p>
            <p className='text-center font-bold text-slate-300'>Ideas</p>
            <p className='text-center font-bold text-slate-300'>Logs</p>
            <p className='text-center font-bold text-slate-300'>Spotlights</p>
          </div>
          <div />
        </div>
      </GlassWindowFrame>
    </div>
  );
}
