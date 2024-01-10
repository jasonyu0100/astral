export default function DraftHeaderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-slate-300 text-md font-bold">{children}</div>;
}
