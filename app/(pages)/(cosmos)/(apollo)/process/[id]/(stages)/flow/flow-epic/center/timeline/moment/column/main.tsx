import clsx from "clsx";

export function FlowPointColumm({
  children,
  index
}: {
  children: React.ReactNode;
  index: number
}) {

  return (
    <div
      className={clsx("flex flex-col items-center w-full space-y-[30px] p-[20px]", {
        "pt-[100px]": index % 2
      })}
      style={{ height: "100%" }}
    >
      {children}
    </div>
  );
}
