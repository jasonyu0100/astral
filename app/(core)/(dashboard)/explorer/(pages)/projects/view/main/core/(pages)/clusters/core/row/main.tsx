import { HorizonClusterRowItem } from './item/main';

export function HorizonClusterRow() {
  return (
    <div
      className={`flex h-full w-full flex-row space-x-[2rem] overflow-auto py-[2rem]`}
    >
      <HorizonClusterRowItem />
      <HorizonClusterRowItem />
      <HorizonClusterRowItem />
      <HorizonClusterRowItem />
      <HorizonClusterRowItem />
      <HorizonClusterRowItem />
      <HorizonClusterRowItem />
      <HorizonClusterRowItem />
    </div>
  );
}
