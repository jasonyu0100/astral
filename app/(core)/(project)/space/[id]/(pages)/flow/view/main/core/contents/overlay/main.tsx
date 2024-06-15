import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceFlowList } from './list/main';

export function SpaceFlowListOverlay() {
  return (
    <GlassAreaContainer
      name={SpaceFlowListOverlay.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
    >
      <SpaceFlowList />
    </GlassAreaContainer>
  );
}
