export default function DraftSpace({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[540px] p-[20px] relative">{children}</div>
  );
}
