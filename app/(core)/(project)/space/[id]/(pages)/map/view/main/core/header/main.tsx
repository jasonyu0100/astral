import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceMapHeaderCenter } from './center/main';
import { SpaceMapHeaderLeft } from './left/main';
import { SpaceMapHeaderRight } from './right/main';

export function SpaceMapHeader() {
  return (
    <GlassAreaContainer
      name={SpaceMapHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`z-50 flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpaceMapHeaderLeft />
      <SpaceMapHeaderCenter />
      <SpaceMapHeaderRight />
    </GlassAreaContainer>
  );
}
