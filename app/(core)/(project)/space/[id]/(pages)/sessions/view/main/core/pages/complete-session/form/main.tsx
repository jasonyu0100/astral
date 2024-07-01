import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceSessionsCompleteSessionFormDetails } from './details/main';
import { SpaceSessionsCompleteSessionHeader } from './header/main';
import { SpaceSessionsCompleteSessionFormContributors } from './members/main';

export function SpaceSessionsCompleteSessionForm() {
  return (
    <GlassWindowFrame
      className='h-full max-h-[600px] max-w-[800px] flex-grow p-[1rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex h-full flex-grow flex-col justify-between space-y-[1rem]'>
          <SpaceSessionsCompleteSessionHeader />
          {/* <SpaceSessionsSessionUpdates /> */}
          {/* <HorizontalDivider /> */}
          <SpaceSessionsCompleteSessionFormDetails />
          <SpaceSessionsCompleteSessionFormContributors />
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
