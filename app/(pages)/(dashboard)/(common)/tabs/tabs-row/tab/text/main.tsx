import clsx from "clsx";

export default function TabText({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={clsx(
        "w-[7rem] mt-1 text-slate-400 text-2xl font-extraBold leading-9",
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
