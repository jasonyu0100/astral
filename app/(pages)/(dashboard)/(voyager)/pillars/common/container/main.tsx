export default function ArtContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full overflow-auto h-full">{children}</div>;
}
