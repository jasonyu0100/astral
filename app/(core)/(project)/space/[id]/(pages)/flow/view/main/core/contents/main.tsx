import { SpaceFlowContentsDisplay } from './display/main';

export function SpaceFlowCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col'
    >
      <SpaceFlowContentsDisplay />
    </div>
  );
}
