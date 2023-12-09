export default function GalleryHeaderTextSub({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-white text-3xl font-normal font-regular leading-9">
      {children}
    </p>
  );
}
