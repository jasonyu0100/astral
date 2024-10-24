import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { roundedFx } from '@/style/data';

export function Colors() {
  return (
    <GlassWindowFrame
      className='w-[30rem] animate-pulse-slow bg-white shadow-glow'
      roundedFx={roundedFx['rounded-l']}
    >
      <GlassWindowContents className='flex w-full flex-row pr-[2rem]'>
        <div className='flex aspect-square w-full items-end justify-end bg-green-500 p-[1rem]'>
          <div className='flex w-full flex-row justify-between'>
            <p className='font-bold text-white text-opacity-80'>#ffffff</p>
          </div>
        </div>
        <div className='flex aspect-square w-full items-end justify-end bg-orange-500 p-[1rem]'>
          <div className='flex w-full flex-row justify-between'>
            <p className='font-bold text-white text-opacity-80'>#ffffff</p>
          </div>
        </div>
        <div className='flex aspect-square w-full items-end justify-end bg-purple-500 p-[1rem]'>
          <div className='flex w-full flex-row justify-between'>
            <p className='font-bold text-white text-opacity-80'>#ffffff</p>
          </div>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
