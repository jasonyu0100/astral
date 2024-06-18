import { SpaceFlowContentsDisplay } from './display/main';

export function SpaceFlowCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col'
    >
      <SpaceFlowContentsDisplay />
      {/* <div style={{ height: '50%', top: '0%' }} className='absolute'>
        <SpaceFlowListOverlay />
      </div> */}
      {/* <div
        style={{ height: '50%', top: '50%' }}
        className='absolute flex flex-row justify-end'
      >
        <SpaceFlowCoreTools />
      </div> */}
    </div>
  );
}
