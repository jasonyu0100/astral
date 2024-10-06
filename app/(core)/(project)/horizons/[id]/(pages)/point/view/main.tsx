import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ImageBackground } from '@/ui/background/img/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonPointSidebar } from './sidebar/main';

export function HorizonPointView() {
  return (
    <GlassAreaContainer
      name={HorizonPointView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <HorizonPointSidebar />
      <div className='relative flex h-full flex-grow flex-col'>
        <div className='absolute h-full w-full divide-y-[1px] divide-slate-300 divide-opacity-30'>
          <div className='grid h-1/2 w-full grid-cols-2 items-center justify-center  divide-x-[1px] divide-slate-300 divide-opacity-30'>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-300'>A</p>
            </div>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-300'>P1</p>
            </div>
          </div>
          <div className='grid h-1/2 w-full grid-cols-2 items-center justify-center divide-x-[1px]  divide-slate-300 divide-opacity-30'>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-300'>P2</p>
            </div>
            <div className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-300'>B</p>
            </div>
          </div>
        </div>
        <ImageBackground />
      </div>
    </GlassAreaContainer>
  );
}
