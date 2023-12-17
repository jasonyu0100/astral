export default function GalleryGuideLink({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: () => void
}) {
  return (
    <p className="text-slate-500 text-xl font-bold uppercase cursor-pointer" onClick={onClick}>{children}</p>
  );
}
