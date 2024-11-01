import { HorizonsArcCore } from './core/main';

export function HorizonsArcMain() {
  return (
    <div
      className='relative flex flex-grow flex-col'
      style={{ height: 'calc(100% - 10rem)' }}
    >
      <HorizonsArcCore />
    </div>
  );
}
