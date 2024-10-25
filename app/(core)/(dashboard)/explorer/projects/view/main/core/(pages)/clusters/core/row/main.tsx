import { HorizonsClusterRowItem } from './item/main';

export function HorizonsClusterRow() {
  return (
    <div
      className={`flex h-full w-full flex-row space-x-[2rem] overflow-auto py-[2rem]`}
    >
      <HorizonsClusterRowItem />
      <HorizonsClusterRowItem />
      <HorizonsClusterRowItem />
      <HorizonsClusterRowItem />
      <HorizonsClusterRowItem />
      <HorizonsClusterRowItem />
      <HorizonsClusterRowItem />
      <HorizonsClusterRowItem />
    </div>
  );
}
