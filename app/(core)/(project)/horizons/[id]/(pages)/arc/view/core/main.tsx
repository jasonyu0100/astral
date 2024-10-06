import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizonArcGridItem } from './grid/item/main';

export function HorizonsArcCore() {
  return (
    <div
      className='relative flex flex-grow flex-col'
      style={{ height: 'calc(100% - 13rem)' }}
    >
      <ImageBackground />
      <AbsoluteHolder>
        <div className='flex h-full flex-col overflow-auto p-[2rem]'>
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
  );
}
