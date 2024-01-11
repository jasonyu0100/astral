import clsx from "clsx";

export function TabText({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={clsx(
        "h-[2.5rem] w-[7rem] text-slate-400 text-xl font-extraBold leading-9",
        {
          "opacity-50": !active,
          "opacity-100": active,
        }
      )}
    >
      {children}
    </div>
  );
}
