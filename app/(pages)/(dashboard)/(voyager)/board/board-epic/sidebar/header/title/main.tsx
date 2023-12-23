export default function BoardSidebarHeaderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-slate-500 font-extraBold text-xl">{children}</p>;
}
