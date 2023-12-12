export default function PillarsGuideLink({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: () => null
}) {
  return (
    <p className="text-slate-500 text-xl font-bold uppercase cursor-pointer" onClick={onClick}>{children}</p>
  );
}
