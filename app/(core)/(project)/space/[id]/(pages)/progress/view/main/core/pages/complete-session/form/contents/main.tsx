import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { SpaceProgressCompleteSessionFormDetails } from './details/main';
import { SpaceProgressCompleteSessionFormContributors } from './members/main';

export function SpaceProgressSessionFormContents() {
  return (
    <GlassWindowFrame className='h-full overflow-auto'>
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
        <SpaceProgressCompleteSessionFormDetails />
        {/* <SpaceProgressSessionUpdates /> */}
        <SpaceProgressCompleteSessionFormContributors />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
