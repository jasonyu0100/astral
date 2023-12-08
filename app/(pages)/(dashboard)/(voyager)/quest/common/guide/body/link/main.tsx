export default function QuestGuideLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-slate-500 text-xl font-bold uppercase">{children}</p>
  );
}
