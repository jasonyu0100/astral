import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceFlightMain } from './main/main';
import { SpaceFlightSidebar } from './sidebar/main';

export function SpaceFlightView() {
  return (
    <GlassAreaContainer
      name={SpaceFlightView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      <SpaceFlightMain />
      <SpaceFlightSidebar />
    </GlassAreaContainer>
  );
}
