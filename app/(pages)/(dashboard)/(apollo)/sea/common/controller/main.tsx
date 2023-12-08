export default function SeaController({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-row">{children}</div>;
}
