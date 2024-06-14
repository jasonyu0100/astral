import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceBoardMain } from './main/main';
import { SpaceBoardSidebar } from './sidebar/main';

export function SpaceBoardView() {
  return (
    <GlassAreaContainer
      name={SpaceBoardView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceBoardMain />
      <SpaceBoardSidebar />
    </GlassAreaContainer>
  );
}
