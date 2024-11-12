import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralStopIcon } from '@/icons/stop/main';
import { glassFx } from '@/style/data';
import { HomePersonalFlowContainer } from './container/main';
import { HomePersonalTableGrid } from './grid/main';
import { HomePersonalTableHeader } from './header/main';

export function HomePersonalTableMain() {
  return (
    <>
      <HomePersonalFlowContainer>
        <GlassWindowFrame className='h-[4rem] shadow-glow'>
          <GlassWindowContents className='grid grid-cols-3 px-[2rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <p className='text-lg font-bold text-slate-400'>
                7d left - Making a difference
              </p>
            </div>
            <div className='flex flex-row items-center justify-center space-x-[1rem]'></div>
            <div className='flex flex-row items-center justify-end space-x-[1rem]'>
              <button className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'>
                <p className='font-bold text-slate-300'>End Flow</p>
                <AstralStopIcon />
              </button>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <div className='flex w-full flex-col'>
          <HomePersonalTableHeader />
          <HomePersonalTableGrid />
        </div>
      </HomePersonalFlowContainer>
    </>
  );
}
