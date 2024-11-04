import { PublicSpaceMain } from './main/main';
import { PublicSpaceSidebar } from './sidebar/main';

export function PublicSpaceView() {
  return (
    <div
      className='relative flex w-full flex-row'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <PublicSpaceSidebar />
      <PublicSpaceMain />
    </div>
  );
}
