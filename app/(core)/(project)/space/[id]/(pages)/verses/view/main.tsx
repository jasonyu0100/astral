import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceVersesMain } from './main/main';
import { SpaceVersesSidebar } from './sidebar/main';

export function SpaceVersesView() {
  return (
    <GlassAreaContainer
      name={SpaceVersesView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceVersesMain />
      <SpaceVersesSidebar />
    </GlassAreaContainer>
  );
}
