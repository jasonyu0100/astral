import { HorizonsGroupRowItem } from './item/main';

export function HorizonsGroupRow() {
  return (
    <div
      className={`flex h-full w-full flex-row space-x-[2rem] overflow-auto py-[2rem]`}
    >
      <HorizonsGroupRowItem />
      <HorizonsGroupRowItem />
      <HorizonsGroupRowItem />
      <HorizonsGroupRowItem />
      <HorizonsGroupRowItem />
      <HorizonsGroupRowItem />
      <HorizonsGroupRowItem />
      <HorizonsGroupRowItem />
    </div>
  );
}
