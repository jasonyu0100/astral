import clsx from "clsx";

export default function TabGreenShard({
  active,
}: {
  active: boolean;
}) {
  return (
    <div className={clsx("w-[9rem] h-1 bg-gradient-to-br from-amber-300 to-emerald-400", {
      "opacity-0": !active,
      "opacity-100": active,
    })} />
  );
}
