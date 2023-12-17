import { CircleLeftIcon } from "@/(pages)/(common)/icons/global/circle-left/main";

export interface BackTabProps extends React.ComponentPropsWithoutRef<"a"> {
}

export function TabsBackButton({ ...props }: BackTabProps) {
  return (
    <a
      {...props}
      className="flex flex-col justify-center items-start w-[2rem] mb-1"
    >
      <CircleLeftIcon />
    </a>
  );
}
