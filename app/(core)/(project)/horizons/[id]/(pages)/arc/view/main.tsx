import { AstralSendIcon } from '@/icons/send/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ImageBackground } from '@/ui/background/img/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizonArcGridItem } from './core/grid/item/main';
import { HorizonsArcSidebar } from './sidebar/main';

export function HorizonArcView() {
  return (
    <GlassAreaContainer
      name={HorizonArcView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <HorizonsArcSidebar />
      <div className='flex h-full flex-grow flex-col overflow-hidden'>
        <div
          className='relative flex flex-grow flex-col'
          style={{ height: 'calc(100% - 8rem)' }}
        >
          <ImageBackground />
          <AbsoluteHolder>
            <div className='flex flex-col overflow-auto p-[2rem]'>
              <div className='grid w-full grid-cols-4 gap-[2rem]'>
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
                <HorizonArcGridItem />
              </div>
            </div>
          </AbsoluteHolder>
        </div>
        <div className='flex h-[8rem] w-full flex-row items-center justify-between space-x-[2rem] p-[2rem] shadow-glow'>
          <GlassWindowFrame
            className='h-[4rem] w-full'
            roundedFx={roundedFx['rounded-full']}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex items-center justify-center'>
              <input
                className='h-full w-full bg-transparent px-[2rem] text-slate-300 outline-none'
                placeholder='Post...'
              />
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <div className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'>
            <AstralSendIcon />
          </div>
        </div>
      </div>
    </GlassAreaContainer>
  );
}
