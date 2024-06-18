import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { SpaceSeaFooterCenter } from './center/main';
import { SpaceSeaFooterLeft } from './left/main';
import { SpaceSeaerFooterRight } from './right/main';

export function SpaceSeaFooter() {
  return (
    <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0 shadow-glow'>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
      <GlassWindowContents className='flex flex-row items-center px-[2rem]'>
        <SpaceSeaFooterLeft />
        <SpaceSeaFooterCenter />
        <SpaceSeaerFooterRight />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
