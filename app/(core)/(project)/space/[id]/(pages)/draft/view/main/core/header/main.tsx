import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceDraftHeaderCenter } from './center/main';
import { SpaceDraftHeaderLeft } from './left/main';
import { SpaceDraftHeaderRight } from './right/main';

export function SpaceDraftHeader() {
  return (
    <GlassAreaContainer
      name={SpaceDraftHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpaceDraftHeaderLeft />
      <SpaceDraftHeaderCenter />
      <SpaceDraftHeaderRight />
    </GlassAreaContainer>
  );
}
