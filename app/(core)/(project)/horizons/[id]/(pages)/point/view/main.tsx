import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { HorizonsPointMain } from './main/main';
import { HorizonPointSidebar } from './sidebar/main';

export function HorizonsPointView() {
  return (
    <GlassAreaContainer
      name={HorizonsPointView.name}
      sizeFx='flex-grow h-full overflow-hidden'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <HorizonPointSidebar />
      <HorizonsPointMain />
    </GlassAreaContainer>
  );
}
