import { borderFx } from '@/style/data';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function JournalRecordTableHeader() {
  return (
    <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
      <div className='grid w-full grid-cols-6 justify-items-center py-[1rem]'>
        <div className='font-bold text-slate-500'>#</div>
        <div className='col-span-2 font-bold text-slate-500 '>entry</div>
        <div className='font-bold text-slate-500'>title</div>
        <div className='col-span-2 font-bold text-slate-500'>description</div>
      </div>
    </GlassWindowFrame>
  );
}
