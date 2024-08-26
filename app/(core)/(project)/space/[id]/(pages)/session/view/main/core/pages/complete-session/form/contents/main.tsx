import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
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
