import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { SpaceMapHeaderCenter } from './center/main';
import { SpaceMapHeaderLeft } from './left/main';
import { SpaceMapHeaderRight } from './right/main';

export function SpaceMapHeader() {
  return (
    <GlassAreaContainer
      name={SpaceMapHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpaceMapHeaderLeft />
      <SpaceMapHeaderCenter />
      <SpaceMapHeaderRight />
    </GlassAreaContainer>
  );
}
