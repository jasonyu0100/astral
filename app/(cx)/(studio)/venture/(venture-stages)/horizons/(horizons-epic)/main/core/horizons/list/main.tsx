import { Divider } from "@/(components)/(line)/divider/main";
import { Horizon } from "./horizon/main";

export function HorizonsList() {
  return (
    <div
      className={`flex w-full flex-col space-y-[1rem] overflow-auto px-[2rem] pb-[3rem]`}
    >
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Horizon />
      <Divider dividerFx='h-[5px] mt-[2rem]' />
    </div>
  );
}
