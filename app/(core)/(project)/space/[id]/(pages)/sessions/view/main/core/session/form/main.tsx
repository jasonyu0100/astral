import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceSessionsUpdateFormDetails } from './details/main';
import { SpaceSessionsUpdateHeader } from './header/main';
import { SpaceSessionsUpdateFormContributors } from './members/main';

export function SpaceSessionsSessionUpdateForm() {
  return (
    <GlassWindowFrame
      className='max-w-[800px] flex-grow p-[2rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='overflow-auto'>
        <div className='h-full w-full pr-[2rem]'>
          <div className='flex h-full flex-grow flex-col justify-between space-y-[1rem]'>
            <SpaceSessionsUpdateHeader />
            {/* <SpaceSessionsSessionUpdates /> */}
            {/* <HorizontalDivider /> */}
            <SpaceSessionsUpdateFormDetails />
            <SpaceSessionsUpdateFormContributors />
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
