import clsx from "clsx";

export function TabOrangeShard({
  active,
}: {
  active: boolean;
}) {
  return (
    <div
      className={clsx(
        "w-[9rem] h-1 bg-gradient-to-br from-red-500 to-amber-300",
        {
          "opacity-0": !active,
          "opacity-100": active,
        }
      )}
    />
  );
}
