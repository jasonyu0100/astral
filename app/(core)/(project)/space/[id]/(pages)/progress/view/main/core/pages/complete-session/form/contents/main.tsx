import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
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
    </GlassWindowFrame>
  );
}
