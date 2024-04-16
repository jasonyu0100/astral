import { HorizonsListContainer } from "./horizons/main";

export function HorizonsCore() {
  return (
    <div
      className='flex flex-col overflow-auto w-full h-full'
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
