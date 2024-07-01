import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceProgressCompleteSessionFormDetails } from './details/main';
import { SpaceProgressCompleteSessionHeader } from './header/main';
import { SpaceProgressCompleteSessionFormContributors } from './members/main';

export function SpaceProgressCompleteSessionForm() {
  return (
    <GlassWindowFrame
      className='h-full max-h-[600px] max-w-[800px] flex-grow p-[1rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex h-full flex-grow flex-col justify-between space-y-[1rem]'>
          <SpaceProgressCompleteSessionHeader />
          {/* <SpaceProgressSessionUpdates /> */}
          {/* <HorizontalDivider /> */}
          <SpaceProgressCompleteSessionFormDetails />
          <SpaceProgressCompleteSessionFormContributors />
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
