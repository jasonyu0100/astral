import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { borderFx, glassFx } from '@/(style)/data';
import { SpaceSessionUpdateFormDetails } from './details/main';
import { SpaceSessionUpdateHeader } from './header/main';
import { SpaceSessionUpdateFormContributors } from './members/main';
import { SpaceSessionSessionUpdates } from './updates/main';

export function SpaceSessionSessionUpdateForm() {
  return (
    <GlassWindowFrame
      className='h-full max-w-[800px] flex-grow p-[2rem]'
      borderFx={`${borderFx['border-l']} ${borderFx['border-r']}`}
    >
      <GlassWindowContents className='overflow-auto'>
        <div className='h-full w-full pr-[2rem]'>
          <div className='flex h-full flex-grow flex-col justify-between space-y-[1rem]'>
            <SpaceSessionUpdateHeader />
            <SpaceSessionSessionUpdates />
            <HorizontalDivider />
            <SpaceSessionUpdateFormDetails />
            <SpaceSessionUpdateFormContributors />
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
