import { SpaceFlowList } from './display/main';
import { SpaceFlowListOverlay } from './overlay/main';

export function SpaceFlowCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex flex-row'
      >
        <SpaceFlowListOverlay />
      </div>
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex flex-row'
      >
        <SpaceFlowList />
      </div>
    </div>
  );
}
