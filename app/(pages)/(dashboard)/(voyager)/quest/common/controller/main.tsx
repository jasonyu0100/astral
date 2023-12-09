export default function QuestController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full overflow-auto  border border-slate-200 border-opacity-30 rounded-md"
      style={{ height: "100%" }}
    >
      {children}
    </div>
  );
}
