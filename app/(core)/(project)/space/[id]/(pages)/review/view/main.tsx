import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceReviewMain } from './main/main';
import { SpaceReviewSidebar } from './sidebar/main';

export function SpaceReviewView() {
  return (
    <GlassAreaContainer
      name={SpaceReviewView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceReviewMain />
      <SpaceReviewSidebar />
    </GlassAreaContainer>
  );
}
