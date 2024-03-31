import { HorizonsListContainer } from "./horizons/main";

export function HorizonsCore() {
  return (
    <div
      className='flex flex-row overflow-auto'
      style={{ height: 'calc(100% - 100px)', width: 'calc(100% - 320px)' }}
    >
      <HorizonsListContainer />
      <HorizonsListContainer />
      <HorizonsListContainer />
      <HorizonsListContainer />
      <HorizonsListContainer />
      <HorizonsListContainer />
      <HorizonsListContainer />
    </div>
  );
}
