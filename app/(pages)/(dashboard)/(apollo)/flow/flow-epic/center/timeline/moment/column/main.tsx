export function FlowPointColumm({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div
      className="flex flex-col items-center overflow-auto w-full space-y-[30px] p-[20px] scrollbar-delayed"
      style={{ height: "100%" }}
    >
      {children}
    </div>
  );
}
