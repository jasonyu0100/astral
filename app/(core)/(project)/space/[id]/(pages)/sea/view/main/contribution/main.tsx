import { ProfileCover } from '@/(components)/(element)/profile/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { horizonMap } from '@/(core)/(project)/horizon/[id]/map';
import { borderFx, roundedFx, glassFx } from '@/(style)/data';
import {
  exampleFileElem,
  exampleFileElems,
} from '@/(server)/(model)/elements/file/main';
import { SeaContributionHeader } from './header/main';
import { SeaContributionContents } from './contents/main';

export function SeaContribution() {
  return (
    <GlassWindowFrame
      className='w-full'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded']}
    >
      <GlassWindowContents>
        <SeaContributionHeader />
        <SeaContributionContents />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
