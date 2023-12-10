export default function DraftWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-row h-full w-full">{children}</div>;
}
