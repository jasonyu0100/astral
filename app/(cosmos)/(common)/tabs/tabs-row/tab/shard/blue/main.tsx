import clsx from "clsx"

export function TabBlueShard({ active }: { active: boolean }) {
  return (
    <div className={clsx("w-[9rem] h-1 bg-gradient-to-br from-emerald-500 to-blue-600", {
      "opacity-0": !active,
      "opacity-100": active,
    })} />
  );
}
