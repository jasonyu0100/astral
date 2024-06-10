import { HorizonsListContainer } from './horizons/main';

export function HorizonsCore() {
  return (
    <div className='h-full w-full overflow-auto p-[1rem]'>
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
