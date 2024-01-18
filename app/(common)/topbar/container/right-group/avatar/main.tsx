import { LinkInputProps } from "@/(common)/types/main";

export function TopbarAvatar({ ...props }: LinkInputProps) {
  return (
    <a className="h-full flex items-center ml-[2rem]" {...props}>
      <img
        className="w-[2.5rem] h-[2.5rem] rounded-full shadow-md shadow-slate-300/50 animate-pulse-slow"
        src="/brand/avatar.png"
      />
    </a>
  );
}
