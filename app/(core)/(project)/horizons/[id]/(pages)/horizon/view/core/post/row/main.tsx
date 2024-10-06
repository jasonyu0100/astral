import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function HorizonsHorizonListRow() {
  return (
    <GlassWindowFrame
      className='w-full pt-[2rem]'
      borderFx={borderFx['border-t']}
    >
      <GlassWindowContents className='flex flex-col items-center space-y-[1rem]'>
        <div className='flex w-full flex-row space-x-[2rem] overflow-auto pb-[2rem]'>
          <div className='flex aspect-[11/13] h-[150px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] '>
            <img src='/stock/passion.png' className='aspect-square w-full' />
            <p className='font-permanentMarker'>123</p>
          </div>
          <div className='flex aspect-[11/13] h-[150px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] '>
            <img src='/stock/passion.png' className='aspect-square w-full' />
            <p className='font-permanentMarker'>123</p>
          </div>
          <div className='flex aspect-[11/13] h-[150px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] '>
            <img src='/stock/passion.png' className='aspect-square w-full' />
            <p className='font-permanentMarker'>123</p>
          </div>
          <div className='flex aspect-[11/13] h-[150px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] '>
            <img src='/stock/passion.png' className='aspect-square w-full' />
            <p className='font-permanentMarker'>123</p>
          </div>
          <div className='flex aspect-[11/13] h-[150px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] '>
            <img src='/stock/passion.png' className='aspect-square w-full' />
            <p className='font-permanentMarker'>123</p>
          </div>
          <div className='flex aspect-[11/13] h-[150px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] '>
            <img src='/stock/passion.png' className='aspect-square w-full' />
            <p className='font-permanentMarker'>123</p>
          </div>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
