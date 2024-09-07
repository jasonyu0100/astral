import { HorizonsListContainer } from './horizons/main';

export function VentureHorizonsCore() {
  return (
    <div className='h-full w-full overflow-auto'>
      <div className={`flex w-full flex-col`}>
        <HorizonsListContainer />
        <HorizonsListContainer />
        <HorizonsListContainer />
        <HorizonsListContainer />
        <HorizonsListContainer />
        <HorizonsListContainer />
        <HorizonsListContainer />
      </div>
    </div>
  );
}
