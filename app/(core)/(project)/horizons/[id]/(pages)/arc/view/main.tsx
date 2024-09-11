import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonArcGridItem } from './core/grid/item/main';
import { HorizonsArcNavigation } from './navigation/main';
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
          className='flex flex-grow flex-col overflow-hidden p-[2rem]'
          style={{ height: 'calc(100% - 4rem)' }}
        >
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
        <HorizonsArcNavigation />
      </div>
    </GlassAreaContainer>
  );
}
