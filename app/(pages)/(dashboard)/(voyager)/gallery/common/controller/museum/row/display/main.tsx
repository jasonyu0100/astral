export default function GalleryMuseumDisplay({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white w-[400px] h-[200px] p-[20px]">{children}</div>;
}
