import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function CreateSpacesTableHeader() {
  return (
    <div className='w-full p-[1rem]'>
      <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
        <div className='grid w-full grid-cols-9 items-center py-[1rem]'>
          <div>
            <p className='text-center text-sm font-bold text-slate-400'>#</p>
          </div>
          <div className='col-span-2'>
            <p className='text-sm font-bold text-slate-400'>Space</p>
          </div>
          <div></div>
          <div></div>
          <div className='col-span-2'></div>
          <div></div>
        </div>
      </GlassWindowFrame>
    </div>
  );
}
