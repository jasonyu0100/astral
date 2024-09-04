import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceSpotlightMain } from './main/main';
import { SpaceSpotlightSidebar } from './sidebar/main';

export function SpaceSpotlightView() {
  return (
    <GlassAreaContainer
      name={SpaceSpotlightView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceSpotlightMain />
      <SpaceSpotlightSidebar />
    </GlassAreaContainer>
  );
}
