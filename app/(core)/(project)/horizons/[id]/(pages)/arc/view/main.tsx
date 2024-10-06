import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonsArcCore } from './core/main';
import { HorizonsArcNavigation } from './navigation/main';
import { HorizonsArcSchedule } from './schedule/main';
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
        <HorizonsArcSchedule />
        <HorizonsArcCore />
        <HorizonsArcNavigation />
      </div>
    </GlassAreaContainer>
  );
}
