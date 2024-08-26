import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { SpaceSessionCompleteSessionFormDetails } from './details/main';
import { SpaceSessionCompleteSessionFormContributors } from './members/main';

export function SpaceSessionSessionFormContents() {
  return (
    <GlassWindowFrame className='h-full overflow-auto'>
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
        <SpaceSessionCompleteSessionFormDetails />
        {/* <SpaceSessionSessionUpdates /> */}
        <SpaceSessionCompleteSessionFormContributors />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
