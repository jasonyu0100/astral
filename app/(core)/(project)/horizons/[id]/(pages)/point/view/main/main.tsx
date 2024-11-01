import { HorizonsPointCreateSpace } from '../create/main';
import { HorizonsPointMainCore } from './core/main';
import { HorizonsPointHeader } from './header/main';

export function HorizonsPointMain() {
  return (
    <div className='flex h-full w-full flex-grow flex-col overflow-hidden'>
      <HorizonsPointHeader />
      <HorizonsPointMainCore />
      <HorizonsPointCreateSpace />
    </div>
  );
}
