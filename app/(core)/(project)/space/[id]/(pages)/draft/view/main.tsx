import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceDraftMain } from './main/main';

export function SpaceDraftView() {
  return (
    <GlassAreaContainer
      name={SpaceDraftView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceDraftMain />
      {/* <SpaceDraftSidebar /> */}
    </GlassAreaContainer>
  );
}
