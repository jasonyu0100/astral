import { Horizon } from "./horizon/main";

export function HorizonsList() {
  return (
    <div
      className={`flex h-full w-full flex-row space-x-[1rem] overflow-auto py-[1rem]`}
    >
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
    </div>
  );
}
