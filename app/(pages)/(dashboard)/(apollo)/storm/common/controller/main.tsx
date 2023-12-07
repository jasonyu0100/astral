export default function StormController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-row">
      {children}
    </div>
  );
}