export default function HeaderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-slate-300 text-md font-bold">{children}</p>;
}
