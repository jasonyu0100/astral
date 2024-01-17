import { CircleLeftIcon } from "@/(common)/icons/global/circle-left/main";
import { LinkInputProps } from "@/(common)/types/main";

export function TabsBackButton({ ...props }: LinkInputProps) {
  return (
    <a
      {...props}
      className="flex flex-col justify-center items-start w-[2rem] h-[3rem] mr-[3rem]"
    >
      <CircleLeftIcon />
    </a>
  );
}
