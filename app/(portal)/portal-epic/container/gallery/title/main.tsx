export function PortalGalleryTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-center w-full text-black text-[64px] font-normal font-permanentMarker leading-9 capitalize">
        {children}
      </div>
    </div>
  );
}
