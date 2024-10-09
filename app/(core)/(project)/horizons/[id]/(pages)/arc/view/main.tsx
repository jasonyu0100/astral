import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonsArcHeader } from './main/header/main';
import { HorizonsArcMain } from './main/main';
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
        <HorizonsArcHeader />
        <HorizonsArcMain />
        <HorizonsArcNavigation />
      </div>
    </GlassAreaContainer>
  );
}
