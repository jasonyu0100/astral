import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceSeaContributionContents } from './contents/main';
import { SpaceSeaContributionHeader } from './header/main';

export function SpaceSeaContribution() {
  return (
    <GlassWindowFrame
      className='w-full'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded']}
    >
      <GlassWindowContents>
        <SpaceSeaContributionHeader />
        <SpaceSeaContributionContents />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
