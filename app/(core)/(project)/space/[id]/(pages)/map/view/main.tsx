import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceMapMain } from './main/main';
import { SpaceMapSidebar } from './sidebar/main';

export function SpaceMapView() {
  return (
    <GlassAreaContainer
      name={SpaceMapView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceMapSidebar />
      <SpaceMapMain />
    </GlassAreaContainer>
  );
}
