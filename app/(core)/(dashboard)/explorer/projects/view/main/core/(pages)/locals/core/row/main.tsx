import { HorizonsLocalItem } from './item/main';

export function HorizonsLocalRow() {
  return (
    <div
      className={`flex h-full w-full flex-row space-x-[2rem] overflow-auto py-[2rem]`}
    >
      <HorizonsLocalItem />
      <HorizonsLocalItem />
      <HorizonsLocalItem />
      <HorizonsLocalItem />
      <HorizonsLocalItem />
      <HorizonsLocalItem />
      <HorizonsLocalItem />
      <HorizonsLocalItem />
    </div>
  );
}
