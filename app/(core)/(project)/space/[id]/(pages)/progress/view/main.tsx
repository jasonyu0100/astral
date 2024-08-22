import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceProgressContainer } from './container/main';
import { SpaceProgressMain } from './main/main';
import { SpaceProgressSidebar } from './sidebar/main';

export function SpaceProgressShareView() {
  return (
    <GlassAreaContainer
      name={SpaceProgressContainer.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceProgressMain />
      <SpaceProgressSidebar />
    </GlassAreaContainer>
  );
}
