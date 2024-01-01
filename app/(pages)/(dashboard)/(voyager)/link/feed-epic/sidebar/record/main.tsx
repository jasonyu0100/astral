export default function LinkRecord({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full w-full space-y-[2rem] flex flex-col">{children}</div>;
}
